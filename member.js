function skillsMember() {
  return {
    restrict: "member",
    templateUrl: "app/skills/skills.html",
    controller: "SkillsController",
    controllerAs: "vm",
    bindToController: true, 
    scope: {
      member: "=",
      skills: "=",
      onSkillChange: "&",
    },
    link: function (scope, element, attrs) {
      // Link function logic if needed
    },
  }
}