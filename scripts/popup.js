    /* 
    *   Алгоритм
    *
    *   1. Начало.
    *   2. Проверка условия (навешиваем слушатель событий на click кнопки копирования и ожидаем ее нажатия): если кнопка нажимается.
    *       2.1. Да: Получаем диалоговое окно (создание переменной, которая не будет меняться). 
    *               Добавляем странице запрет на прокрутку (создание переменной, которая будет меняться).
    *           2.1.1 Проверка условия (ожидаем нажатия на бэкграунд/кнопку закрытия): если происходит нажатие.
    *               2.1.1.1 Да: Закрытие окна, удаление запрета на прокрутку и Конец.
    *               2.1.1.2 Нет (если нажатие не происходит): Дожидаемся истечения таймера и запуска программы по закрытию окна и удалению запрета, Конец.
    *       2.2 Нет: Конец.
    *   3. Конец
    * 
    *   Блок-схема: images/block__scheme.png
    */

const dialog = document.getElementById('myDialog')              //Определяем диалоговое окно
const dialogOpener = document.querySelector('.bx-copy')         //Определяем открывашку диалога
const dialogCloser = dialog.querySelector('.closeDialogBtn')    //Определяем закрывашку диалога

dialog.addEventListener('click', closeOnBackDropClick)          //Навешиваем слушатель событий на клик и ожидаем клика
dialog.addEventListener('cancel', (event) => {                  //Навешиваем слушатель событий на отмену и ожидаем события
  returnScroll()                                                
});                                                                     
dialogOpener.addEventListener('click', openModalAndLockScroll)  //Навешиваем слушатель событий на клик и ожидаем клика
dialogCloser.addEventListener('click', (event) => {             //Навешиваем слушатель событий на клик и ожидаем клика
  event.stopPropagation()
  close()
})

function openModalAndLockScroll() {                             //Открываем диалог и запрещаем прокрутку
  dialog.showModal()                                            //Открываем диалог
  document.body.classList.add('scroll-lock')                    //Добавляем запрет на прокрутку окна
  setTimeout(close, 150);                                       //Запускаем функцию закрытия через 150мс
}

function closeOnBackDropClick({ currentTarget, target }) {      //Обозначаем
  const dialog = currentTarget                                  //Определяем диалог как цель
  const isClickedOnBackDrop = target === dialog                 //Приравниваем клик на бг к цели
  if (isClickedOnBackDrop) {                                    //Условие: если кликнуто на бекграунд диалога
    close()                                                     //Запускаем закрытие окна
  }
}

function returnScroll() {
  document.body.classList.remove('scroll-lock')                 //Снимаем запрет на прокрутку окна
}

function close() {
  dialog.close()                                                //Закрываем диалоговое окно
  returnScroll()                                                //Запускаем снятие запрета на прокрутку
}

