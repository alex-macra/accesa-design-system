//you get the point


//code editor initializations and settings

var editor = ace.edit("editor");
  editor.setTheme("ace/theme/idle_fingers");
  editor.session.setMode("ace/mode/html");

  var editor2 = ace.edit("editor2");
  editor2.setTheme("ace/theme/idle_fingers");
  editor2.session.setMode("ace/mode/html");

  var editor3 = ace.edit("editor3");
  editor3.setTheme("ace/theme/idle_fingers");
  editor3.session.setMode("ace/mode/html");

  var editor4 = ace.edit("editor4");
  editor4.setTheme("ace/theme/idle_fingers");
  editor4.session.setMode("ace/mode/html");

  var editor5 = ace.edit("editor5");
  editor5.setTheme("ace/theme/idle_fingers");
  editor5.session.setMode("ace/mode/html");

  //make it lighter pls!!!!
  function scrollIt(destination, duration = 200, easing = 'linear', callback) {

    const easings = {
      easeOutQuad(t) {
        return t * (2 - t);
      }
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction = easings[easing](time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback) {
          callback();
        }
        return;
      }

      requestAnimationFrame(scroll);
    }

    scroll();
  }


  //scroll to harcodes (for now i only hope...)
  document.querySelector('.js-scroll-1').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-1'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });
  document.querySelector('.js-scroll-2').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-2'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-11').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-11'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-12').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-12'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-13').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-13'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-14').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-14'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-21').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-21'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-23').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-23'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-31').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-31'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-32').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-32'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-33').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-33'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-34').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-34'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  document.querySelector('.js-scroll-91').addEventListener('click', () => {
    scrollIt(
      document.querySelector('.js-scrollTo-91'),
      300,
      'easeOutQuad',
      () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });