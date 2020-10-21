//Vriable declaration
var skillsInput = document.getElementById("skillsVacancyInput");
var skillsContainer = document.getElementById("skillsVacancyContainer");
var skillsList = []

skillsVacancyInput.addEventListener("keyup", function (event) {
	//It prevents the submit of the form
	event.preventDefault();
	if (event.key === 'Enter') {
		//Variable Declaration
		let badgeContainer = document.createElement("div");
		let deleteTagOption = document.createElement("a");
		let skillName = document.createElement("div");
		let skillDescription = skillsInput.value;

		//Classes are added
		badgeContainer.classList.add("badge");
		badgeContainer.classList.add("badge-skill");
		badgeContainer.classList.add("pt-2");
		badgeContainer.classList.add("m-2");

		deleteTagOption.innerHTML += '×';
		deleteTagOption.href="#";
		deleteTagOption.classList.add("del-skill");
		deleteTagOption.classList.add("mr-1");
		deleteTagOption.classList.add("deleteTag");
		
		skillName.classList.add("m-1");
		skillName.classList.add("mr-4");
		skillName.classList.add("ml-2");
		skillName.classList.add("skill-description");

		//The desired html element is made
		skillName.innerHTML += skillDescription;
		badgeContainer.appendChild(deleteTagOption);
		badgeContainer.appendChild(skillName);

		//The element is appended to the badge container
		skillsContainer.appendChild(badgeContainer);

		skillsList.push(skillDescription);

		//Field is reset
		skillsInput.value = "";

	}
})

document.addEventListener("click", function (event) {
	//If the delete option of a badge is selected...
	event.preventDefault();
	if (hasClass(event.target, 'deleteTag')) {
		let badgeSkill = (event.target).parentNode;
		skillsContainer.removeChild(badgeSkill);
	}
})


function hasClass(elem, className) {
	return elem.classList.contains(className);
}