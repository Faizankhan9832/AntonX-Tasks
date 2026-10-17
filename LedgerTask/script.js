(function(){
  const STAGES = [
    { key:"todo",     label:"Todo"     },
    { key:"improve",  label:"Improve"  },
    { key:"review",   label:"Review"   },
    { key:"checking", label:"Checking" },
    { key:"done",     label:"Done"     }
  ];

  let tasks = [];
  let idCounter = 1;

  const board = document.getElementById("board");
  const form = document.getElementById("task-form");
  const titleInput = document.getElementById("title");
  const descInput = document.getElementById("desc");
  const priorityInput = document.getElementById("priority");
  const hint = document.getElementById("hint");

  let dragId = null;

  function buildBoard(){
    board.innerHTML = "";
    STAGES.forEach((stage, i) => {
      const col = document.createElement("div");
      col.className = "stage";
      col.innerHTML = `
        <div class="stage-head">
          <span class="num">0${i+1}</span>
          <h2>${stage.label}</h2>
          <span class="count" data-count="${stage.key}">0</span>
        </div>
        <div class="drop-zone" data-stage="${stage.key}"></div>
      `;
      board.appendChild(col);
    });

    board.querySelectorAll(".drop-zone").forEach(zone => {
      zone.addEventListener("dragover", e => {
        e.preventDefault();
        zone.classList.add("drag-over");
      });
      zone.addEventListener("dragleave", () => zone.classList.remove("drag-over"));
      zone.addEventListener("drop", e => {
        e.preventDefault();
        zone.classList.remove("drag-over");
        if (dragId !== null) {
          moveTask(dragId, zone.dataset.stage);
        }
      });
    });
  }

  function render(){
    STAGES.forEach(stage => {
      const zone = board.querySelector(`.drop-zone[data-stage="${stage.key}"]`);
      const countEl = board.querySelector(`[data-count="${stage.key}"]`);
      const items = tasks.filter(t => t.stage === stage.key);
      countEl.textContent = items.length;
      zone.innerHTML = "";

      if (items.length === 0){
        const note = document.createElement("div");
        note.className = "empty-note";
        note.textContent = "No tasks here yet.";
        zone.appendChild(note);
        return;
      }

      items.forEach(task => zone.appendChild(renderCard(task)));
    });
  }

  function renderCard(task){
    const card = document.createElement("div");
    card.className = `card priority-${task.priority}${task.complete ? " complete" : ""}`;
    card.draggable = true;
    card.dataset.id = task.id;

    const stageOptions = STAGES.map(s =>
      `<option value="${s.key}" ${s.key === task.stage ? "selected" : ""}>${s.label}</option>`
    ).join("");

    card.innerHTML = `
      <div class="card-top">
        <h3>${escapeHTML(task.title)}</h3>
        <span class="tag priority-${task.priority}">${task.priority}</span>
      </div>
      ${task.desc ? `<p>${escapeHTML(task.desc)}</p>` : ""}
      <div class="card-controls">
        <label class="complete-toggle">
          <input type="checkbox" ${task.complete ? "checked" : ""} data-action="toggle">
          Complete
        </label>
        <div class="card-actions">
          <select class="stage-select" data-action="move">${stageOptions}</select>
          <button type="button" class="icon-btn" data-action="delete" title="Delete task" aria-label="Delete task">✕</button>
        </div>
      </div>
    `;

    card.addEventListener("dragstart", () => {
      dragId = task.id;
      card.classList.add("dragging");
    });
    card.addEventListener("dragend", () => {
      dragId = null;
      card.classList.remove("dragging");
    });

    card.querySelector('[data-action="toggle"]').addEventListener("change", e => {
      task.complete = e.target.checked;
      render();
    });
    card.querySelector('[data-action="move"]').addEventListener("change", e => {
      moveTask(task.id, e.target.value);
    });
    card.querySelector('[data-action="delete"]').addEventListener("click", () => {
      tasks = tasks.filter(t => t.id !== task.id);
      render();
    });

    return card;
  }

  function moveTask(id, stage){
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    task.stage = stage;
    if (stage === "done") task.complete = true;
    render();
  }

  function escapeHTML(str){
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const desc = descInput.value.trim();
    const priority = priorityInput.value;

    if (!title){
      hint.classList.add("show");
      titleInput.focus();
      return;
    }
    hint.classList.remove("show");

    tasks.push({
      id: idCounter++,
      title,
      desc,
      priority,
      stage: "todo",
      complete: false
    });

    titleInput.value = "";
    descInput.value = "";
    priorityInput.value = "medium";
    titleInput.focus();
    render();
  });

  buildBoard();
  render();
})();