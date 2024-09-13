document.addEventListener("DOMContentLoaded", () => {
    let hints = document.querySelectorAll('.hint')

    hints.forEach((hint) => {
        hint.addEventListener('click', function () {
            let hintPlaceholder = document.querySelector('#' + hint.id + '_placeholder');

            if (hintPlaceholder.innerHTML) {
                hintPlaceholder.innerHTML = '';
                return;
            }

            let hintText = '';

            switch (hint.id) {
                case 'hint1':
                    hintText = 'Можете посмотреть, как реализовано во втором задании:)';
                    break;
                case 'hint2':
                    hintText = 'Используйте тег span';
                    break;
                case 'hint3':
                    hintText = 'Используйте тег img с атрибутом src';
                    break;
                case 'hint4':
                    hintText = 'Используйте тег a с атрибутой href. Для откртия в новой вкладке используйте атрибут target со значением blank';
                    break;
                case 'hint5':
                    hintText = 'Используйте тег ul и теги li внутри него'
                    break;
                case 'hint6':
                    hintText = 'Используйте тег select и теги option внутри него'
                    break;
                case 'hint7':
                    hintText = 'Используйте тег input с атрибутом type. Для чекбоска type="checkbox", для радиокнопки type="radio". Для радиокнопки должно быть минимум два варианта и один выбранный по умолчанию'
                    break;
                case 'hint8':
                    hintText = 'Используйте тег input с атрибутом type. Если вы добрадись до этого места, значит вы уже достаточно крутые, чтобы найти типы в документации:)'
                    break;
                case 'hint9':
                    hintText = 'Используйте тег button, либо тег input с атрибутом button. Как больше нравится.'
                    break;
                case 'hint10':
                    hintText = 'Нужно сходить посмотреть документацию. Я в вас верю.'
                    break;
                case 'hint11':
                    hintText = 'Нужно использовать тег table. За спецификой его использования, да-да, в документацию:)'
                    break;
                case 'hint12':
                    hintText = 'Тег form для формы. Атрибут required для необходимых полей. Остальное просто:)'
                    break;
            }


            hintPlaceholder.innerHTML = hintText;
        })
    })
});