// 'use strict';

const btnAdd = document.querySelector('.add-btn');
const btnCloseModal = document.querySelector('.close-modal-btn');
const uploadPage = document.querySelector('.upload-page');
const listContainer = document.querySelector('.task-list');
const btnUpload = document.getElementById('upload--button');

let taskInput;
let dueDateInput;

// Open/Close Modal
const openModalPage = function () {
  uploadPage.classList.remove('hidden');
};

const closeModalPage = function () {
  uploadPage.classList.add('hidden');
};

// Open/Close Upload Modal Page
btnAdd.addEventListener('click', openModalPage);
btnCloseModal.addEventListener('click', closeModalPage);

// Submitting Task in Modal Form
const submitTask = function () {
  taskInput = document.getElementById('task-input').value;
  dueDateInput = document.getElementById('due-date-input').value;
  closeModalPage();
};

// Clear Modal Inputs
const clearModalInputs = function () {
  document.getElementById('task-input').value = '';
  document.getElementById('due-date-input').value = '';
};

// Task List Markup
const taskListMarkup = function () {
  const markup = `
  <li class="task">
    <input type="checkbox" name="check" id="check"/>
    <div class="new-task">
      <div class="text">${taskInput}</div>
      <div class="due-date">${dueDateInput}</div>
      <button class="delete-btn">
        <i class="fa-solid fa-trash-can"></i>
      </button>
    </div>
  </li>
  `;
  listContainer.insertAdjacentHTML('afterbegin', markup);

  isChecked();

  deleteTask();
};

const uploadNewTask = function () {
  submitTask();

  taskListMarkup();

  clearModalInputs();
};

// Upload Task
btnUpload.addEventListener('click', uploadNewTask);

// When Checked and Completed
const isChecked = function () {
  let task = document.querySelectorAll('.task');
  for (let i = 0; i < task.length; i++) {
    task[i].addEventListener('click', function () {
      setTimeout(() => {
        this.remove();
      }, 500);
    });
  }
};

// Delete Task
const deleteTask = function () {
  let btnDelete = document.querySelectorAll('.delete-btn');
  for (let i = 0; i < btnDelete.length; i++) {
    btnDelete[i].addEventListener('click', function () {
      this.remove();
    });
  }

  clearModalInputs();
};
