/* ==========================================
   GET ELEMENTS
========================================== */

const todoTitle =
    document.getElementById("todoTitle");


const todoDescription =
    document.getElementById("todoDescription");


const addTodoButton =
    document.getElementById("addTodoButton");


/* Top priority */

const priorityButton =
    document.getElementById("priorityButton");


const priorityText =
    document.getElementById("priorityText");


const priorityIcon =
    document.getElementById("priorityIcon");


const priorityMenu =
    document.getElementById("priorityMenu");


/* All columns */

const taskContainers =
    document.querySelectorAll(
        ".task-container"
    );


/* Default priority */

let selectedPriority = "high";


/* ==========================================
   PRIORITY INFORMATION
========================================== */

const priorityData = {

    high: {
        name: "High",
        className: "high"
    },

    medium: {
        name: "Medium",
        className: "medium"
    },

    low: {
        name: "Low",
        className: "low"
    }

};


/* ==========================================
   TOP PRIORITY DROPDOWN
========================================== */

priorityButton.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        priorityMenu.classList.toggle(
            "show"
        );

    }
);


/* ==========================================
   SELECT TOP PRIORITY
========================================== */

const priorityOptions =
    priorityMenu.querySelectorAll(
        ".priority-option"
    );


priorityOptions.forEach(
    function (option) {

        option.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const priority =
                    option.dataset.priority;


                selectedPriority =
                    priority;


                updateTopPriority(
                    priority
                );


                priorityMenu.classList.remove(
                    "show"
                );

            }
        );

    }
);


/* ==========================================
   UPDATE TOP PRIORITY
========================================== */

function updateTopPriority(
    priority
) {

    const data =
        priorityData[priority];


    priorityText.textContent =
        data.name;


    priorityIcon.className =
        "priority-symbol " +
        data.className;

}


/* ==========================================
   CLOSE TOP DROPDOWN
========================================== */

document.addEventListener(
    "click",
    function () {

        priorityMenu.classList.remove(
            "show"
        );

    }
);


/* ==========================================
   ADD TODO
========================================== */

addTodoButton.addEventListener(
    "click",
    function () {

        const title =
            todoTitle.value.trim();


        const description =
            todoDescription.value.trim();


        if (title === "") {

            alert(
                "Please enter a todo title."
            );

            return;

        }


        createTaskCard(
            title,
            description,
            selectedPriority
        );


        /* Clear inputs */

        todoTitle.value = "";

        todoDescription.value = "";


        /* Reset priority */

        selectedPriority =
            "high";


        updateTopPriority(
            "high"
        );

    }
);


/* ==========================================
   CREATE CARD
========================================== */

function createTaskCard(
    title,
    description,
    priority
) {

    /* Main card */

    const card =
        document.createElement(
            "div"
        );


    card.classList.add(
        "task-card"
    );


    card.draggable = true;


    /* ======================================
       TITLE
    ====================================== */

    const titleElement =
        document.createElement(
            "div"
        );


    titleElement.classList.add(
        "task-title"
    );


    titleElement.textContent =
        title;


    /* ======================================
       DESCRIPTION
    ====================================== */

    const descriptionElement =
        document.createElement(
            "div"
        );


    descriptionElement.classList.add(
        "task-description"
    );


    descriptionElement.textContent =
        description;


    /* ======================================
       PRIORITY WRAPPER
    ====================================== */

    const priorityWrapper =
        document.createElement(
            "div"
        );


    priorityWrapper.classList.add(
        "card-priority-wrapper"
    );


    /* ======================================
       PRIORITY BUTTON
    ====================================== */

    const cardPriorityButton =
        document.createElement(
            "button"
        );


    cardPriorityButton.type =
        "button";


    cardPriorityButton.classList.add(
        "card-priority-button"
    );


    /* ======================================
       PRIORITY ICON
    ====================================== */

    const icon =
        document.createElement(
            "span"
        );


    icon.classList.add(
        "priority-symbol"
    );


    updateCardIcon(
        icon,
        priority
    );


    cardPriorityButton.appendChild(
        icon
    );


    /* ======================================
       CARD PRIORITY MENU
    ====================================== */

    const menu =
        document.createElement(
            "div"
        );


    menu.classList.add(
        "card-priority-menu"
    );


    /* ======================================
       CREATE PRIORITY OPTIONS
    ====================================== */

    [
        "high",
        "medium",
        "low"
    ].forEach(
        function (level) {

            const option =
                document.createElement(
                    "div"
                );


            option.classList.add(
                "card-priority-option"
            );


            option.dataset.priority =
                level;


            /* Icon */

            const optionIcon =
                document.createElement(
                    "span"
                );


            optionIcon.classList.add(
                "priority-symbol"
            );


            updateCardIcon(
                optionIcon,
                level
            );


            /* Text */

            const optionText =
                document.createElement(
                    "span"
                );


            optionText.textContent =
                priorityData[level].name;


            option.appendChild(
                optionIcon
            );


            option.appendChild(
                optionText
            );


            menu.appendChild(
                option
            );


            /* =================================
               CHANGE CARD PRIORITY
            ================================= */

            option.addEventListener(
                "click",
                function (event) {

                    event.stopPropagation();


                    updateCardIcon(
                        icon,
                        level
                    );


                    menu.classList.remove(
                        "show"
                    );


                    menu.classList.remove(
                        "open-up"
                    );


                    /*
                        Remove the high
                        z-index from card
                    */

                    card.classList.remove(
                        "menu-open"
                    );

                }
            );

        }
    );


    /* ======================================
       OPEN CARD PRIORITY MENU
    ====================================== */

    cardPriorityButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            /*
                Close all other menus
            */

            document
                .querySelectorAll(
                    ".card-priority-menu.show"
                )
                .forEach(
                    function (openMenu) {

                        if (
                            openMenu !== menu
                        ) {

                            openMenu.classList.remove(
                                "show"
                            );


                            openMenu.classList.remove(
                                "open-up"
                            );


                            /*
                                Also remove
                                high z-index
                            */

                            const otherCard =
                                openMenu.closest(
                                    ".task-card"
                                );


                            if (otherCard) {

                                otherCard.classList.remove(
                                    "menu-open"
                                );

                            }

                        }

                    }
                );


            /*
                Check available space
            */

            const rect =
                cardPriorityButton
                    .getBoundingClientRect();


            const menuHeight =
                95;


            const spaceBelow =
                window.innerHeight -
                rect.bottom;


            const spaceAbove =
                rect.top;


            /*
                Open upward if needed
            */

            if (
                spaceBelow < menuHeight &&
                spaceAbove > spaceBelow
            ) {

                menu.classList.add(
                    "open-up"
                );

            }

            else {

                menu.classList.remove(
                    "open-up"
                );

            }


            /*
                Toggle menu
            */

            const isOpening =
                !menu.classList.contains(
                    "show"
                );


            menu.classList.toggle(
                "show"
            );


            /*
                Put the entire card
                above other cards
            */

            if (isOpening) {

                card.classList.add(
                    "menu-open"
                );

            }

            else {

                card.classList.remove(
                    "menu-open"
                );

            }

        }
    );


    /* ======================================
       PUT PRIORITY TOGETHER
    ====================================== */

    priorityWrapper.appendChild(
        cardPriorityButton
    );


    priorityWrapper.appendChild(
        menu
    );


    /* ======================================
       DELETE BUTTON
    ====================================== */

    const deleteButton =
        document.createElement(
            "button"
        );


    deleteButton.type =
        "button";


    deleteButton.classList.add(
        "delete-button"
    );


    deleteButton.textContent =
        "✕";


    deleteButton.title =
        "Delete task";


    /* ======================================
       DELETE CARD
    ====================================== */

    deleteButton.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            card.remove();

        }
    );


    /* ======================================
       PUT EVERYTHING IN CARD
    ====================================== */

    card.appendChild(
        titleElement
    );


    card.appendChild(
        descriptionElement
    );


    card.appendChild(
        priorityWrapper
    );


    card.appendChild(
        deleteButton
    );


    /* ======================================
       DRAG EVENTS
    ====================================== */

    addDragEvents(
        card
    );


    /* ======================================
       ADD TO TODOS
    ====================================== */

    document
        .getElementById("todos")
        .appendChild(
            card
        );

}


/* ==========================================
   UPDATE CARD ICON
========================================== */

function updateCardIcon(
    icon,
    priority
) {

    icon.className =
        "priority-symbol " +
        priorityData[priority].className;


    icon.textContent =
        ">";

}


/* ==========================================
   DRAG EVENTS
========================================== */

function addDragEvents(
    card
) {

    /* Start dragging */

    card.addEventListener(
        "dragstart",
        function () {

            card.classList.add(
                "dragging"
            );

        }
    );


    /* Stop dragging */

    card.addEventListener(
        "dragend",
        function () {

            card.classList.remove(
                "dragging"
            );

        }
    );

}


/* ==========================================
   DROP ZONES
========================================== */

taskContainers.forEach(
    function (container) {

        /* ==================================
           DRAG OVER
        ================================== */

        container.addEventListener(
            "dragover",
            function (event) {

                event.preventDefault();


                container.classList.add(
                    "drag-over"
                );

            }
        );


        /* ==================================
           DRAG LEAVE
        ================================== */

        container.addEventListener(
            "dragleave",
            function () {

                container.classList.remove(
                    "drag-over"
                );

            }
        );


        /* ==================================
           DROP
        ================================== */

        container.addEventListener(
            "drop",
            function (event) {

                event.preventDefault();


                container.classList.remove(
                    "drag-over"
                );


                const draggingCard =
                    document.querySelector(
                        ".dragging"
                    );


                if (!draggingCard) {

                    return;

                }


                /* Move card */

                container.appendChild(
                    draggingCard
                );


                /* =================================
                   DONE COLUMN
                ================================= */

                if (
                    container.dataset.status ===
                    "done"
                ) {

                    draggingCard.classList.add(
                        "done"
                    );

                }

                else {

                    draggingCard.classList.remove(
                        "done"
                    );

                }

            }
        );

    }
);


/* ==========================================
   CLOSE CARD MENUS WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener(
    "click",
    function () {

        document
            .querySelectorAll(
                ".card-priority-menu.show"
            )
            .forEach(
                function (menu) {

                    menu.classList.remove(
                        "show"
                    );


                    menu.classList.remove(
                        "open-up"
                    );


                    /*
                        Find the card that
                        owns this menu
                    */

                    const card =
                        menu.closest(
                            ".task-card"
                        );


                    if (card) {

                        card.classList.remove(
                            "menu-open"
                        );

                    }

                }
            );

    }
);