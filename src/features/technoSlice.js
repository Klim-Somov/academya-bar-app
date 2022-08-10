import { createSlice } from "@reduxjs/toolkit";
import espresso from "../assets/img/photo_2022-07-25_21-32-23.png";
import dubleEspresso from "../assets/img/dubleEspresso.png";
import capuch from "../assets/img/capuch.png";
import lungo from "../assets/img/lungo.png";
import ristretto from "../assets/img/ristretto.png";
import americano from "../assets/img/americano.png";
import kakao from "../assets/img/kakao.png";
import aranchata from "../assets/img/aranchata.png";
import green from "../assets/img/green.png";
import bumble from "../assets/img/buble.png";
import espressoTonik from "../assets/img/espresso-tonik.png";
import fresh from "../assets/img/fresh.png";
import milk from "../assets/img/milkCocktail.png";
import glint from "../assets/img/glint.png";
import machiato from "../assets/img/machiato.png";
import kurkuma from "../assets/img/kurkuma.png";
import dubleCapuch from "../assets/img/dubleCapuch.png";
import gorShok from "../assets/img/gorShok.png";
import flat from "../assets/img/flat.png";
import coldKapuch from "../assets/img/coldKapuch.png";
import irish from "../assets/img/irish.png";
import mojito from "../assets/img/mojito.png";
import long from "../assets/img/long.png";
import negroni from "../assets/img/negroni.png";
import kir from "../assets/img/kir.png";
import maiTai from "../assets/img/maiTai.png";
import margo from "../assets/img/margo.png";
import rossini from "../assets/img/rossini.png";
import aperol from "../assets/img/aperol.png";
import matchaCapuch from "../assets/img/matchaCapuch.png";
import old from "../assets/img/old.png";
import raf from "../assets/img/raf.png";
import fieroTonic from "../assets/img/fieroTonic.png";
import kosmo from "../assets/img/kosmo.png";
import mintTea from "../assets/img/mintTea.png";
import gingerTea from "../assets/img/gingerTea.png";
import oblepiha from "../assets/img/oblepiha.png";
import malinaImbir from "../assets/img/malinaImbir.png";
import tea from "../assets/img/tea.png";
import milkShoc from "../assets/img/milkShoc.png";
import milkVanil_banan from "../assets/img/milkvanil_banan.png";
import matchaLatte from "../assets/img/matchaLatte.png";
import latte from "../assets/img/latte.png";
import bellini from "../assets/img/bellini.png";

const initialState = [
  {
    id: 1,
    category: "Горячие",
    name: "Эспрессо",
    img: espresso,
    description:
      "Для варки кофе используем кофемашину. Пролив воды должен быть 20-25 секунд Посуда : чашка под эспрессо",
    ingredients: ["30мл вода", "10г кофе", "1шт печенье"],
  },
  {
    id: 2,
    name: "Двойной эспрессо",
    category: "Горячие",
    img: dubleEspresso,
    description:
      "Для варки кофе используем кофемашину. Пролив воды должен быть 20-25 секунд Посуда : чашка под американо",
    ingredients: ["60 мл вода", "18г кофе", "1шт печенье"],
  },
  {
    id: 3,
    name: "Капучино",
    category: "Горячие",
    img: capuch,
    description:
      "Для варки кофе используем кофемашину. взбиваем молоко. температура 60 ℃. Сверху готового кофе вливаем взбитое молоко. Посуда: чашка под американо",
    ingredients: [
      "1шт эспрессо",
      "200 мл молоко",
      "1шт печенье",
      "выход: 210 мл",
    ],
  },
  {
    id: 33,
    name: "Матча Капучино",
    category: "Горячие",
    img: matchaCapuch,
    description:
      "взбиваем венчиком в 30мл воды 2г матчи. взбиваем молоко. температура 60 ℃. Сверху готового кофе вливаем взбитое молоко. Посуда: чашка под американо",
    ingredients: [
      "30мл вода",
      "2г матчи",
      "200 мл молоко",
      "1шт печенье",
      "выход: 210 мл",
    ],
  },
  {
    id: 34,
    name: "Латте",
    category: "Горячие",
    img: latte,
    description:
      "Готовим эспрессо. взбиваем молоко. температура 60 ℃. Вливаем взбитое молоко в бокал, сверху на молоко вливаем эспрессо. Посуда: бокал под латте",
    ingredients: [
      "1шт эспрессо",
      "250 мл молоко",
      "1шт печенье",
      "выход: 300 мл",
    ],
  },
  {
    id: 35,
    name: "Матча Латте",
    category: "Горячие",
    img: matchaLatte,
    description:
      "взбиваем венчиком в 30мл воды 2г матчи. взбиваем молоко. температура 60 ℃. Вливаем взбитое молоко в бокал, сверху на молоко вливаем матчу. Посуда: бокал под латте",
    ingredients: [
      "30 мл вода",
      "2г матчи",
      "250 мл молоко",
      "1шт печенье",
      "выход: 300 мл",
    ],
  },
  {
    id: 98,
    name: "Гранд капучино",
    category: "Горячие",
    img: dubleCapuch,
    description:
      "Для варки кофе используем кофемашину. Готовим двойной эспрессо, взбиваем молоко. температура 60 ℃. Сверху готового кофе вливаем взбитое молоко. ",
    ingredients: ["1шт двойной эспрессо", "250мл молоко", "выход: 300мл"],
  },
  {
    id: 4,
    name: "Эспрессо Лунго",
    category: "Горячие",
    img: lungo,
    description:
      "для варки используем кофе машину, проливаем 60 мл. из группы. Посуда : чашка под эспрессо",
    ingredients: ["60 мл вода", "10г кофе", "1шт печенье"],
  },
  {
    id: 5,
    name: "Ристретто",
    category: "Горячие",
    img: ristretto,
    description:
      "Для варки кофе используем кофемашину. Посуда : чашка под эспрессо",
    ingredients: ["15 мл вода", "10г кофе", "1шт печенье"],
  },
  {
    id: 6,
    name: "Американо",
    category: "Горячие",
    img: americano,
    description:
      "Для варки кофе используем кофемашину. 10г кофе смалываем в двойной холдер. проливаем полный обьем кофе в чашку по приципу австралийского лунго . Посуда: чашка американо",
    ingredients: ["130 мл вода", "10г кофе", "1шт печенье", "выход: 130мл"],
  },
  {
    id: 7,
    name: "Макиато",
    category: "Горячие",
    img: machiato,
    description:
      "Готовим эспрессо, добавляем взбитую молочную пену (при помощи  барной ложки). Посуда: чашка под эспрессо",
    ingredients: [
      "30 мл вода",
      "10г кофе",
      "60мл взбитое молоко",
      "1шт печенье",
      "выход: 90мл",
    ],
  },
  {
    id: 8,
    name: "Какао",
    category: "Горячие",
    img: kakao,
    description:
      "Наливаем молоко в питчер добавляем какао и все это взбиваем паровиком как молоко на капучино и переливаем в чашку. Посуда:чашка под какао",
    ingredients: ["25 г какао", "250 мл молоко", "выход: 300мл"],
  },
  {
    id: 88,
    name: "Горячий шоколад",
    category: "Горячие",
    img: gorShok,
    description:
      "В молочнике подогреваем сливки, добавляем шоколад и на горячей ванне тщательно перемешиваем.  Наливаем в чашку. Итоговая консистенция должна быть похожа на 1% кефир.",
    ingredients: ["100г шоколад", "60мл сливки", "выход: 130мл"],
  },
  {
    id: 99,
    name: "Латте - Куркума",
    category: "Горячие",
    img: kurkuma,
    description:
      "Поместить все ингридиенты в питчер, взбить как на капучино. Посуда: бокал Айриш",
    ingredients: [
      "2г куркума-порошок",
      "150мл банановое молоко",
      "1шт эспрессо",
      "выход: 200мл",
    ],
  },
  {
    id: 999,
    name: "Раф-кофе",
    category: "Горячие",
    img: raf,
    description:
      "Поместить все ингридиенты в питчер, взбить как на капучино. Посуда: бокал Айриш",
    ingredients: [
      "3г ванильный сахар",
      "150мл сливки 11%",
      "1шт эспрессо",
      "выход: 200мл",
    ],
  },
  {
    id: 77,
    name: "Флет-уайт",
    category: "Горячие",
    img: flat,
    description:
      "Готовим двойной ристретто, взбиваем молоко. температура 60 ℃. Сверху готового кофе вливаем взбитое молоко. ",
    ingredients: ["1шт двойной ристретто", "200мл молоко", "выход: 210мл"],
  },
  {
    id: 9,
    name: "Аранчата",
    category: "Безалкогольные",
    img: aranchata,
    description:
      "Метод приготовления: билд . Бокал: гибралтар. Украшение: слайс апельсина, слайс лимона. Аранчата п/ф: подготовить сироп фруктозы(1л), апельсины(1кг) и лимоны(1кг). Снять цедру с апельсинов и лимонов (без белой часть корки!), смешать с сиропом, подогреть на плите, немного, не доводя до кипения, процедить,  дать настояться сутки, добавить апельсиновый и лимонный соки, процедить. ",
    ingredients: [
      "70мл аранчата п/ф",
      "200 мл газировка",
      "выход: 270мл + лед",
    ],
  },
  {
    id: 10,
    name: "Грин Фрешнес",
    category: "Безалкогольные",
    img: green,
    description:
      "Метод приготовления: бленд с 5 кубиками льда . Бокал: гибралтар.",
    ingredients: [
      "50 мл пюре дыни",
      "100 мл яблочный фреш",
      "80 мл ананасовый сок",
      "30мл лимонный сок",
      "30мл сахарный сироп",
      "выход: 400мл",
    ],
  },
  {
    id: 11,
    name: "Бамбл",
    category: "Безалкогольные",
    img: bumble,
    description:
      "Охладить бокал, заполнить льдом, добавть сок, cироп, долить эспрессо слоями. Посуда: хайбол",
    ingredients: [
      "1шт эспрессо",
      "150мл апельсиновый фреш",
      "5мл карамельный сироп",
      "выход: 185мл + лед",
    ],
  },
  {
    id: 12,
    name: "Эспрессо-тоник",
    category: "Безалкогольные",
    img: espressoTonik,
    description:
      "Охладить бокал, заполнить льдом, добавть тоник, долить эспрессо слоями, украсить лаймом. Посуда: тумблер",
    ingredients: [
      "1шт эспрессо",
      "120мл тоник",
      "20г лайм",
      "выход: 150мл + лед",
    ],
  },
  {
    id: 13,
    name: "Свежевыжатые соки",
    category: "Безалкогольные",
    img: fresh,
    description: "используем соковыжималку",
    ingredients: ["200 мл свежевыжатого сока", "выход: 200мл"],
  },
  {
    id: 14,
    name: "Молочный коктейль шоколадный",
    category: "Безалкогольные",
    img: milkShoc,
    description:
      "все ингридиенты взбиваем в блендере. Посуда: хайбол. Сверху посыпать какао",
    ingredients: [
      "140 г мороженое",
      "100 мл молоко",
      "50мл сливки",
      "10мл сироп шоколад",
      "выход: 300мл",
    ],
  },
  {
    id: 141,
    name: "Молочный коктейль ванильный",
    category: "Безалкогольные",
    img: milkVanil_banan,
    description: "все ингридиенты взбиваем в блендере. Посуда: хайбол",
    ingredients: [
      "140 г мороженое",
      "100 мл молоко",
      "50мл сливки",
      "10мл сироп ваниль",
      "выход: 300мл",
    ],
  },
  {
    id: 142,
    name: "Молочный коктейль клубничный",
    category: "Безалкогольные",
    img: milk,
    description: "все ингридиенты взбиваем в блендере. Посуда: хайбол",
    ingredients: [
      "100 г мороженое",
      "100 мл молоко",
      "50мл сливки",
      "10мл сироп клубника",
      "40г клубники с.м",
      "выход: 300мл",
    ],
  },
  {
    id: 143,
    name: "Молочный коктейль банановый",
    category: "Безалкогольные",
    img: milkVanil_banan,
    description: "все ингридиенты взбиваем в блендере. Посуда: хайбол",
    ingredients: [
      "100 г мороженое",
      "100 мл молоко",
      "50мл сливки",
      "10мл сироп банан",
      "40г банан",
      "выход: 300мл",
    ],
  },
  {
    id: 15,
    name: "Холодный капучино",
    category: "Безалкогольные",
    img: coldKapuch,
    description:
      "В блендер с 5-ю куб. льда наливаем молоко, сливки и сахарный сироп, добавляем двойной эспрессо, тщательно взбиваем, переливаем в бокал. Украшение : несколько кофейных зерен сверху. Посуда :гибралтар с толстой трубочкой",
    ingredients: ["25 г какао", "250 мл молоко", "выход: 300мл"],
  },
  {
    id: 16,
    name: "Глинтвейн",
    category: "Горячие",
    img: glint,
    description:
      "Слайс яблока и апельсина порезать на 4 части. помещаем все ингридиенты в питчер, подогреваем паровиком не доводя до кипения,  и переливаем в бокал. Посуда: Айриш",
    ingredients: [
      "130мл красное вино",
      "20мл сок апельсиновый св",
      "10мл сок лимона",
      "3шт гвоздика",
      "1 палочка корицы",
      "20мл мед цветочный",
      "10г яблоко",
      "10г апельсин",
      "выход: 230мл",
    ],
  },
  {
    id: 17,
    name: "Айриш - кофе",
    category: "Горячие",
    img: irish,
    description:
      "Насыпаем сахар в бокал, доливаем виски, разогреваем на паровике, добавляем кофе американо, украшаем молочной пеной сверху, до краев бокала. Подаем с ложкой на блюдце. Посуда: Айриш бокал",
    ingredients: [
      "1шт американо",
      "100мл молоко",
      "30мл Виски Джеймсон",
      "5гр сахар тростниковый",
      "выход: 150мл",
    ],
  },
  {
    id: 176,
    name: "Весовой чай",
    category: "Горячие",
    img: tea,
    description: "Насыпать чай в чайник, залить кипятком до нужного объема. ",
    ingredients: [
      "3г чай  ",
      "500мл кипяток",
      "выход: 500мл",
    ],
  },
  {
    id: 177,
    name: "Черный чай с мятой",
    category: "Горячие",
    img: mintTea,
    description: "Заварить чай в чашке добавить пучок мяты",
    ingredients: [
      "1шт чай пакетированный ",
      "200мл кипяток",
      "10гр мята",
      "выход: 200мл",
    ],
  },
  {
    id: 178,
    name: "Имбирный чай",
    category: "Горячие",
    img: gingerTea,
    description:
      "Корень имбиря и лимонник нарезанные тонкой соломкой, а также лайм нарезанный кольцами а кольца порезанные на четыре части, чтобы получились треугольники кладем в стеклянный чайник, добавляем мед, перец, гвоздику. Заливаем кипятком, подогреваем паровиком. Посуда : стеклянный чайник, стеклянная чайная пара",
    ingredients: [
      "30г Корень имбиря ",
      "15г Лимонник",
      "15гр Лайм",
      "50гр Мед донник матовый",
      "3шт Гвоздика",
      "2шт Перец ямайский",
      "выход: 600мл",
    ],
  },
  {
    id: 179,
    name: "Облепихово-апельсиновый",
    category: "Горячие",
    img: oblepiha,
    description:
      "Апельсин порезать треугольниками и помять с облепихой, добавить остальные ингредиенты и подогреть паровиком",
    ingredients: [
      "40г облепиха ",
      "60г апельсин",
      "5г мята",
      "2дэш корица",
      "50гр мед",
      "1шт бадьян",
      "выход: 600мл",
    ],
  },
  {
    id: 180,
    name: "Малина - имбирь",
    category: "Горячие",
    img: malinaImbir,
    description: "Добавить все ингредиенты в чайник, подогреть капучинатором",
    ingredients: [
      "80мл малиновое пюре ",
      "20мл сироп малина",
      "5г мята",
      "30г имбирь",
      "30мл мед",
      "400мл вода",
      "выход: 600мл",
    ],
  },
  {
    id: 18,
    name: "Мохито б/а",
    category: "Безалкогольные",
    img: mojito,
    description:
      "Наливаем молоко в питчер добавляем какао и все это взбиваем паровиком как молоко на капучино и переливаем в чашку. Посуда:чашка под какао",
    ingredients: ["25 г какао", "250 мл молоко", "выход: 300мл"],
  },
  {
    id: 19,
    name: "Лонг Айленд",
    category: "Коктейли",
    img: long,
    description:
      " Метод приготовления: билд. Наполнить гибралтар льдом, добавить алкоголь и лимонный сок, долить сверху колы. Украшение: веточка мяты, 2 дольки лимона",
    ingredients: [
      "30мл водка хаус",
      "30мл ром Бакарди",
      "30мл текила хаус",
      "30мл апельсиновый ликер",
      "10мл джин хаус",
      "20мл лимонный сок ",
      "100мл кола",
      "выход: 400мл",
    ],
  },
  {
    id: 20,
    name: "Негрони",
    category: "Коктейли",
    img: negroni,
    description:
      " Метод приготовления: стир (В смесительный стакан налить джин, вермут и кампари, добавить лед, перемешать ложкой, перелить через стрейнер в бокал со льдом и обмазанными медом внутренними стенками, помолоть сверху перец) Бокал: рокс. Украшение: цедра апельсина ( снимается цедра с апельсина, обрезается резаком в виде треугольника, скручивается, кладется сверху на лед)",
    ingredients: [
      "20мл Campari",
      "40мл Martini Rosso",
      "40мл джин хаус",
      "5мл мед ",
      "2гр молотый перец",
      "выход: 120мл + лед",
    ],
  },
  {
    id: 21,
    name: "Кир Роял",
    category: "Коктейли",
    img: kir,
    description:
      " Метод приготовления: билд ( в бокал охлажденный бокал налить ликер,  долить просеко). Бокал: флюте. Украшение: без него",
    ingredients: [
      "130мл Проссеко хаус",
      "20мл Ликер черной смородины",
      "выход: 150мл",
    ],
  },
  {
    id: 22,
    name: "Май Тай",
    category: "Коктейли",
    img: maiTai,
    description:
      "Метод приготовления: шейк (В шейкере взбить порезанный ананас и все ингридиенты процедить через стрейнер  в бокал наполненный на 3 четверти кусковым льдом, досыпать фрапе) Бокал: тумблер. Украшение: долька ананаса(10гр), веточка мяты",
    ingredients: [
      "90г Ананас",
      "40мл Bacardi Superior",
      "20мл Bacardi Black",
      "10мл Triple Sec",
      "10мл Amaretto",
      "25мл Сок лайма",
      "15мл Сироп фруктозы",
      "выход: 170мл + лед",
    ],
  },
  {
    id: 23,
    name: "Мохито",
    category: "Коктейли",
    img: mojito,
    description:
      "Метод приготовления: Свизл (Все ингридиенты налить в тумблер, насыпать лед фрапе, Добавить листья мяты  и равномерно распределить  их ложкой в бокале, досыпать фрапе.) Бокал: Тумблер Украшение: долька лайма, веточка мяты",
    ingredients: [
      "120мл газировка",
      "15г Мята",
      "30мл Сок лайма",
      "15мл Сироп фруктозы",
      "выход: 180мл + лед",
    ],
  },
  {
    id: 24,
    name: "Маргарита",
    category: "Коктейли",
    img: margo,
    description:
      "Метод приготовления: шейк, дабл стрейн (В шейкере взбить все ингридиенты процедить через стрейнер и сито в охлажденный бокал). Бокал: коктейльная рюмка. Украшение: Цедра лайма (снимается цедра с лайма, обрезается резаком в виде треугольника, скручивается, кладется сверху )",
    ingredients: [
      "90мл Текила хаус",
      "10мл Сироп агавы",
      "30мл Сок лайма",
      "выход: 110мл",
    ],
  },
  {
    id: 25,
    name: "Россини",
    category: "Коктейли",
    img: rossini,
    description:
      "Метод приготовления: бленд,  (В блендере взбить пюре и клубнику с небольшим кол-вом просеко) перелить в охлажденный бокал. Добавить сверху оставшееся кол-во Просеко ",
    ingredients: [
      "120мл Просеко",
      "40г Клубника",
      "80мл Клубничное пюре",
      "выход: 240мл",
    ],
  },
  {
    id: 26,
    name: "Беллини",
    category: "Коктейли",
    img: bellini,
    description:
      "Метод приготовления: бленд,  (В блендере взбить пюре и персик с небольшим кол-вом просеко) перелить в охлажденный бокал. Добавить сверху оставшееся кол-во Просеко ",
    ingredients: [
      "120мл Просеко",
      "40г Персик",
      "80мл Клубничное пюре",
      "выход: 240мл",
    ],
  },
  {
    id: 27,
    name: "Апероль спритц",
    category: "Коктейли",
    img: aperol,
    description:
      "Метод приготовления: билд. Положить слайс апельсина и наполнить бокал на 2/3 льдом, добавить все ингридиенты ",
    ingredients: [
      "120мл Просеко",
      "50мл Апероль",
      "30мл газировка",
      "выход: 200мл",
    ],
  },
  {
    id: 28,
    name: "Фиеро-тоник",
    category: "Коктейли",
    img: fieroTonic,
    description:
      "Метод приготовления: билд. Положить слайс апельсина и наполнить бокал на 2/3 льдом, добавить все ингридиенты ",
    ingredients: ["100мл Тоник", "100мл Мартини Фиеро"],
  },
  {
    id: 29,
    name: "Олдфешен",
    category: "Коктейли",
    img: old,
    description:
      "Метод приготовления: Стир (в смесительном стакане растворить сахар с ангостурой и газировкой, добавить ром, лед (до верху) перемешать барной ложкой, перелить через стрейнер в заранее охлажденный рокс полный льда  .) Бокал: рокс. Украшение: Цедра апельсина ( снимается цедра с апельсина, обрезается резаком в виде треугольника, скручивается, кладется сверху на лед) ",
    ingredients: [
      "50мл Bacardi 8",
      "10г Тростниковый сахар",
      "20мл газировка",
      "2мл Ангостура",
      "выход: 90мл + лед",
    ],
  },
  {
    id: 30,
    name: "Космополитен",
    category: "Коктейли",
    img: kosmo,
    description:
      "Метод приготовления: шейк, дабл стрейн (В шейкере помять клюкву, добавить сок лайма, сироп, водку, ликер. Взбить в шейкере, процедить через стрейнер и сито в охлажденный бокал. Бокал: коктейльная рюмка. Украшение: цедра апельсина (отрезать кусочек цедры, выдавить и поджечь над бокалом эфирные масла, поместить цедру в бокал) ",
    ingredients: [
      "50мл водка хаус",
      "20мл апельсиновый ликер",
      "10г Свежемороженая клюква",
      "20мл сок лайма",
      "5мл сироп фруктозы",
      "выход: 90мл + лед",
    ],
  },
];

export const technoSlice = createSlice({
  name: "technos",
  initialState,

  reducers: {},
});

export default technoSlice.reducer;
