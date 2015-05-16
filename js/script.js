var ctrl = function($scope){
    $scope.arr = [];
    $scope.img = [
    {name:'nol'},
    {name:'bir'},
    {name:'ikki'},
    {name:'uch'},
    {name:'tort'},
    {name:'besh'},
    {name:'olti'},
    {name:'yetti'},
    {name:'sakkiz'},
    {name:'toqqiz'}];
    $scope.cnt = 0;
    $scope.myselected = "";
    $scope.add = function(){
      var tmp = $scope.myselected.name;
      if ($scope.arr.length < 6){
        if ($scope.myselected != ""){
            $scope.removeimg(tmp);
            $scope.arr.push({name:tmp}); 
            $scope.myselected = ""
            $scope.disabled();
          } else {
            alert("Rasm tanlanmagan!");
          }
      } else {
        alert("Boshqa rasm qo'shish mumkin emas!!!");
      }
    };
    $scope.disabled = function(){
      for(var i = 0; i < $scope.arr.length; i++){
        $scope.arr[i].disabledleft = "";
        $scope.arr[i].disabledright = "";
      }
      $scope.arr[$scope.arr.length-1].disabledright = "disabled";
      $scope.arr[0].disabledleft = "disabled";
    };
    $scope.remove = function(val){
      if (val>-1){
        $scope.img.push({name:$scope.arr[val].name});
        $scope.arr.splice(val, 1);
      }
      $scope.disabled();
    };
    $scope.moveleft = function(id){
      var res = $scope.arr[id];
      $scope.arr[id] = $scope.arr[id-1];
      $scope.arr[id-1] = res;
      $scope.disabled();
    };
    $scope.moveright = function(id){
      var res = $scope.arr[id];
      $scope.arr[id] = $scope.arr[id+1];
      $scope.arr[id+1] = res;
      $scope.disabled();
    };
    $scope.removeimg = function(val){
      var index = -1;
      for(var i = 0; i < $scope.img.length; i++){
        if (val == $scope.img[i].name){
          index = i;
          break;
        }
      }
      if (index>-1){
        $scope.img.splice(index, 1);
      }
    };
  };