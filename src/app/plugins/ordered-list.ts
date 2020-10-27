declare var $: any;

export class AddOrderedListComponent {

  constructor() {

  }

    // OrderedList HTML Tag
    addOrderedListTagHTMLCode(uid) {
      // console.log('Calling OrderedList html');

      $(`#cb-buttons-${uid}`).append(`
       <!-- Ordered list button -->
          <div class="tool box1 m-1" id="add-ordered-list-${uid}" title="Ordered List">
            <button class="btn btn-light">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-list-ol" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
              <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 0 1-.492.594v.033a.615.615 0 0 1 .569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 0 0-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"/>
            </svg>
            </button>
          </div>
      `);
    }

    // OrderedList HTML Tag Click Action
    addOrderedListTagClickFunction = (uid) => {
        // Adding OrderedList Tags
        $(`#add-ordered-list-${uid}`).click(() => {
        $(`#original-${uid}`).append(
          `<ol>
          <li></li>
          </ol>`
        );
      });
    }

    // Adding OrderedList
    addOrderedListTagToolBox = (uid) => {
      $(`#original-${uid}`).append(
          `<ol>
          <li></li>
          </ol>`
        );
    }

}