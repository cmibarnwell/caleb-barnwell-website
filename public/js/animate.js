//For the projects section
(function() {

                var aboutEl = $('h1, h2, h3, p, img, figcaption'),
                	topper = $('h2'),
                	topper1 = $('h3.hidden'),
                	topper2 = $('h3.hidden1'),
                	topper3 = $('h3.hidden2'),
                	topper4 = $('h3.hidden3'),
                	topper5 = $('h3.hidden4'),
                	topper6 = $('h3.hidden5'),
                    topper7 = $('h3.hidden6'),
                    aboutElOffset = topper.offset(),
                    aboutElOffset1 = topper1.offset(),
                    aboutElOffset2 = topper2.offset(),
                    aboutElOffset3 = topper3.offset(),
                    aboutElOffset4 = topper4.offset(),
                    aboutElOffset5 = topper5.offset(),
                    aboutElOffset6 = topper6.offset(),
                    aboutElOffset7 = topper7.offset(),
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > (aboutElOffset.top+400) && aboutEl.hasClass('hiddenPro') ) aboutEl.removeClass('hiddenPro');
                    if ( documentEl.scrollTop() > (aboutElOffset1.top-400) && aboutEl.hasClass('hidden') ) aboutEl.removeClass('hidden');
                    if ( documentEl.scrollTop() > (aboutElOffset2.top-400) && aboutEl.hasClass('hidden1') ) aboutEl.removeClass('hidden1');
                    if ( documentEl.scrollTop() > (aboutElOffset3.top-400) && aboutEl.hasClass('hidden2') ) aboutEl.removeClass('hidden2');
                    if ( documentEl.scrollTop() > (aboutElOffset4.top-400) && aboutEl.hasClass('hidden3') ) aboutEl.removeClass('hidden3');
                    if ( documentEl.scrollTop() > (aboutElOffset5.top-400) && aboutEl.hasClass('hidden4') ) aboutEl.removeClass('hidden4');
                    if ( documentEl.scrollTop() > (aboutElOffset6.top-400) && aboutEl.hasClass('hidden5') ) aboutEl.removeClass('hidden5');
                    if ( documentEl.scrollTop() > (aboutElOffset7.top-400) && aboutEl.hasClass('hidden6') ) aboutEl.removeClass('hidden6');
                });
            })();


//for the Skills section
(function() {

                var aboutEl = $('h1, h2, h3, p, ul, ol'),
                	topperSki = $('h2'),
                    aboutElOffset = topperSki.offset(),
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > (aboutElOffset.top-500) && aboutEl.hasClass('hiddenSki') ) aboutEl.removeClass('hiddenSki');
                });
            })();

//for the Courses section
(function() {

                var aboutEl = $('h1, h2, h3, table'),
                    topperCo = $('table'),
                    aboutElOffset = topperCo.offset(),
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > (aboutElOffset.top-600) && aboutEl.hasClass('hiddenCo') ) aboutEl.removeClass('hiddenCo');
                });
            })();

//for the Employment section
(function() {

                var aboutEl = $('h2, h3, p'),
                    topperEmp = $('h2.hiddenEmp'),
                    aboutElOffset = topperEmp.offset(),
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > (aboutElOffset.top-400) && aboutEl.hasClass('hiddenEmp') ) aboutEl.removeClass('hiddenEmp');
                });
            })();

//for the Awards section
(function() {

                var aboutEl = $('h2, h3, p, img, figcaption'),
                    topperAw1 = $('h2.hiddenAw1'),
                    aboutElOffset1 = topperAw1.offset(),
                    topperAw2 = $('h3.hiddenAw2'),
                    aboutElOffset2 = topperAw2.offset(),
                    topperAw3 = $('h3.hiddenAw3'),
                    aboutElOffset3 = topperAw3.offset(),
                    topperAw4 = $('h3.hiddenAw4'),
                    aboutElOffset4 = topperAw4.offset(),
                    topperAw5 = $('h3.hiddenAw5'),
                    aboutElOffset5 = topperAw5.offset(),
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > (aboutElOffset1.top-500) && aboutEl.hasClass('hiddenAw1') ) aboutEl.removeClass('hiddenAw1');
                    if ( documentEl.scrollTop() > (aboutElOffset2.top-500) && aboutEl.hasClass('hiddenAw2') ) aboutEl.removeClass('hiddenAw2');
                    if ( documentEl.scrollTop() > (aboutElOffset3.top-500) && aboutEl.hasClass('hiddenAw3') ) aboutEl.removeClass('hiddenAw3');
                    if ( documentEl.scrollTop() > (aboutElOffset4.top-500) && aboutEl.hasClass('hiddenAw4') ) aboutEl.removeClass('hiddenAw4');
                    if ( documentEl.scrollTop() > (aboutElOffset5.top-500) && aboutEl.hasClass('hiddenAw5') ) aboutEl.removeClass('hiddenAw5');
                });
            })();

//for the Activities section
(function() {

                var aboutEl = $('h2, h3, p, img, figcaption'),
                    topperAct1 = $('h2.hiddenAct1'),
                    aboutElOffset1 = topperAct1.offset(),
                    topperAct2 = $('h3.hiddenAct2'),
                    aboutElOffset2 = topperAct2.offset(),
                    topperAct3 = $('h3.hiddenAct3'),
                    aboutElOffset3 = topperAct3.offset(),
                    topperAct4 = $('h3.hiddenAct4'),
                    aboutElOffset4 = topperAct4.offset(),
                    topperAct5 = $('h3.hiddenAct5'),
                    aboutElOffset5 = topperAct5.offset(),
                    topperAct6 = $('h3.hiddenAct6'),
                    aboutElOffset6 = topperAct6.offset(),
                    documentEl = $(document);

                documentEl.on('scroll', function() {
                    if ( documentEl.scrollTop() > (aboutElOffset1.top-500) && aboutEl.hasClass('hiddenAct1') ) aboutEl.removeClass('hiddenAct1');
                    if ( documentEl.scrollTop() > (aboutElOffset2.top-500) && aboutEl.hasClass('hiddenAct2') ) aboutEl.removeClass('hiddenAct2');
                    if ( documentEl.scrollTop() > (aboutElOffset3.top-500) && aboutEl.hasClass('hiddenAct3') ) aboutEl.removeClass('hiddenAct3');
                    if ( documentEl.scrollTop() > (aboutElOffset4.top-500) && aboutEl.hasClass('hiddenAct4') ) aboutEl.removeClass('hiddenAct4');
                    if ( documentEl.scrollTop() > (aboutElOffset5.top-500) && aboutEl.hasClass('hiddenAct5') ) aboutEl.removeClass('hiddenAct5');
                    if ( documentEl.scrollTop() > (aboutElOffset6.top-500) && aboutEl.hasClass('hiddenAct6') ) aboutEl.removeClass('hiddenAct6');
                });
            })();