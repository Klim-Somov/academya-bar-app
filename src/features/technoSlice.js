import { createSlice } from "@reduxjs/toolkit";
import espresso from "../assets/img/photo_2022-07-25_21-32-23.png";
import dubleEspresso from "../assets/img/dubleEspresso.png";
import capuch from "../assets/img/capuch.png";
import lungo from "../assets/img/lungo.png";
import ristretto from "../assets/img/ristretto.png";
import americano from "../assets/img/americano.png";
import kakao from "../assets/img/kakao.png";

const initialState = [
  {
    id: 1,
    category: "Горячие",
    name: "Еспрессо",
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
    ingredients: ["10 мл вода", "10г кофе", "200 мл молоко", "1шт печенье"],
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
    img: "",
    description:
      "Готовим эспрессо, добавляем взбитую молочную пену (при помощи  барной ложки). Посуда: чашка под эспрессо",
    ingredients: [
      "30 мл вода",
      "10г кофе",
      "взбитое молоко: 60мл ",
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
];

export const technoSlice = createSlice({
  name: "technos",
  initialState,

  reducers: {},
});

export const {} = technoSlice.actions;

export default technoSlice.reducer;
