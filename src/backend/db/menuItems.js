/**
 * menu_items Database can be added here.
 * You can add menu_items of your wish with different attributes
 * */

export const menu_items = [
  /* SUB CATEGORY : Fresh Vegetables */
  {
    _id: "1",
    name: "Cabbage (Patta Gobhi)",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683919054/grocery/fresh_vegetables/1_dk4hoe.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_1",
        unit: "1 piece (400 - 600 g)",
        price: 21,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "2",
    name: "Onion (Pyaz)",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920213/grocery/fresh_vegetables/2_g4ecfh.webp",
    rating: 3.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_2",
        unit: "1 kg",
        price: 19,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_3",
        unit: "2 kg",
        price: 38,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_4",
        unit: "5 kg",
        price: 89,
        in_stock: false,
        default: false,
      },
    ],
  },
  {
    _id: "3",
    name: "Red Capsicum",
    sub_category_id: "SC_1",

    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920599/grocery/fresh_vegetables/3_shemvi.webp",
    rating: 3.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_5",
        unit: "1 piece (125 g - 175 g)",
        price: 50,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "4",
    name: "Corn Cob (Bhutta)",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920754/grocery/fresh_vegetables/4_m2nyij.webp",
    rating: 4.0,
    delivery_time_in_mins: 15,
    item_variant: [
      {
        _id: "V_6",
        unit: "1 piece",
        price: 19,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "5",
    name: "Cherry Tomato - Hydroponically Grown",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683920849/grocery/fresh_vegetables/5_q7m7aq.webp",
    rating: 4.2,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_7",
        unit: "1 piece",
        price: 19,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Fresh Fruits */
  {
    _id: "6",
    name: "Kiran Watermelon (Tarbuj)",
    sub_category_id: "SC_2",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1684614236/grocery/fresh_fruits/6_inflre.webp",
    rating: 4.1,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_8",
        unit: "1 piece (1.7 - 2.5 kg)",
        price: 55,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_9",
        unit: "1 piece (2.5 - 3.8 kg)",
        price: 67,
        in_stock: false,
        default: false,
      },
    ],
  },
  {
    _id: "7",
    name: "Kiwi",
    sub_category_id: "SC_2",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683921355/grocery/fresh_fruits/7_ibdbk1.webp",
    rating: 4.5,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_10",
        unit: "3 piece",
        price: 76,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "8",
    name: "Tender Coconut",
    sub_category_id: "SC_2",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683921479/grocery/fresh_fruits/8_wofdex.webp",
    rating: 4.2,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_11",
        unit: "1 piece",
        price: 190,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "9",
    name: "Pomegranate",
    sub_category_id: "SC_2",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683921842/grocery/fresh_fruits/9_gtcxgl.webp",
    rating: 3.5,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_12",
        unit: "4 pieces (720 g - 800 g)",
        price: 190,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_13",
        unit: "1 kg (5-6 pieces per kg)",
        price: 210,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "10",
    name: "Pear Imported",
    sub_category_id: "SC_2",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683922003/grocery/fresh_fruits/10_zyhyua.webp",
    rating: 3.8,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_14",
        unit: "2 pieces (300 g - 350 g)",
        price: 114,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Leafies & Herbs */
  {
    _id: "11",
    name: "Spinach (Palak)",
    sub_category_id: "SC_3",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683922779/grocery/leafies_herbs/11_anjsb4.webp",
    rating: 3.4,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_15",
        unit: "200 g",
        price: 20,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "12",
    name: "Mint Leaves (Pudina)",
    sub_category_id: "SC_3",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683922869/grocery/leafies_herbs/12_yz5vv4.webp",
    rating: 4.0,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_16",
        unit: "200 g",
        price: 25,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "13",
    name: "Coriander Bunch (Dhaniya)",
    sub_category_id: "SC_3",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683923000/grocery/leafies_herbs/13_qwwojq.webp",
    rating: 3.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_17",
        unit: "100 g",
        price: 30,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Bread & Pav */
  {
    _id: "14",
    name: "Super White Bread",
    sub_category_id: "SC_4",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683923244/grocery/bread_pav/14_ad3pbg.webp",
    rating: 3.5,
    delivery_time_in_mins: 24,
    item_variant: [
      {
        _id: "V_18",
        unit: "400 g",
        price: 40,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "15",
    name: "The Baker's Dozen 100% Wholewheat Pizza Base",
    sub_category_id: "SC_4",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924097/grocery/bread_pav/15_uie2ax.webp",
    rating: 3.0,
    delivery_time_in_mins: 23,
    item_variant: [
      {
        _id: "V_19",
        unit: "140 g",
        price: 89,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Cookies */
  {
    _id: "16",
    name: "Parle Platina Hide & Seek Chocolate Chip Cookies",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924246/grocery/cookies/16_udxcan.webp",
    rating: 3.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_20",
        unit: "100 g",
        price: 80,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_21",
        unit: "200 g",
        price: 49,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "17",
    name: "Britannia Good Day Chocochip Cookies",
    sub_category_id: "SC_5",

    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924536/grocery/cookies/17_hdvfuw.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_22",
        unit: "400 g",
        price: 97,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "18",
    name: "Sunfeast Dark Fantasy Biscuit - Choco Fills Biscuit",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924733/grocery/cookies/18_rtblk9.webp",
    rating: 4.2,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_23",
        unit: "300 g",
        price: 113,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "19",
    name: "Oreo Choco Flavour Sandwich Cream Biscuits",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924894/grocery/cookies/19_ussngt.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_24",
        unit: "120 g",
        price: 120,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "20",
    name: "Britannia Bourbon The Original Biscuit - Buy 4 Get 1 Free",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683924934/grocery/cookies/20_crp8or.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_25",
        unit: "100 g",
        price: 100,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Atta */
  {
    _id: "21",
    name: "Aashirvaad Shudh Chakki Whole Wheat Atta",
    sub_category_id: "SC_6",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925342/grocery/atta/21_ef7vhw.webp",
    rating: 4.5,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_26",
        unit: "5 kg",
        price: 230,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_27",
        unit: "(5 kg) - Pack of 2",
        price: 490,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "22",
    name: "Fortune Chakki Fresh (100% Atta, 0% Maida) Atta",
    sub_category_id: "SC_6",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925610/grocery/atta/22_zwj5d3.webp",
    rating: 3.0,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_28",
        unit: "10 kg",
        price: 380,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "23",
    name: "Amul Organic Atta (Whole Wheat)",
    sub_category_id: "SC_6",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925789/grocery/atta/23_ixtmoo.webp",
    rating: 4.1,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_29",
        unit: "5 kg",
        price: 290,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "24",
    name: "Chakki Atta",
    sub_category_id: "SC_6",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683925952/grocery/atta/24_c9kscz.webp",
    rating: 3.4,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_30",
        unit: "5 kg",
        price: 169,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "25",
    name: "Uttam Sooji/Rava",
    sub_category_id: "SC_6",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926181/grocery/atta/26_e9bhqr.webp",
    rating: 5.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_31",
        unit: "1 kg",
        price: 55,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_32",
        unit: "500 g",
        price: 30,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_33",
        unit: "2 * 500 g",
        price: 59,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_34",
        unit: "500 g - Pack of 3",
        price: 89,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "26",
    name: "Praakritik Organic Khapli Wheat Atta",
    sub_category_id: "SC_6",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926066/grocery/atta/25_dsckts.webp",
    rating: 3.0,
    delivery_time_in_mins: 17,
    item_variant: [
      {
        _id: "V_35",
        unit: "1 kg",
        price: 59,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Rice */
  {
    _id: "27",
    name: "Daawat Rozana Gold Basmati Rice",
    sub_category_id: "SC_7",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926524/grocery/rice/27_ijghji.webp",
    rating: 4.0,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_36",
        unit: "5 kg",
        price: 439,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "28",
    name: "Daawat Sehat Mini Mogra Basmati Rice (Broken)",
    sub_category_id: "SC_7",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926593/grocery/rice/28_f1ibwz.webp",
    rating: 4.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_37",
        unit: "5 kg",
        price: 295,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Poha, Daliya & Other Grains */
  {
    _id: "29",
    name: "24 Mantra Wheat Organic Daliya",
    sub_category_id: "SC_8",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926794/grocery/poha_daliya_rains/29_eted6u.webp",
    rating: 3.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_38",
        unit: "500 g",
        price: 58,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "30",
    name: "Laxmi Maize Thin Poha",
    sub_category_id: "SC_8",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683926896/grocery/poha_daliya_rains/30_zxzvqm.webp",
    rating: 4.1,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_39",
        unit: "500 g",
        price: 39,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Soft Drinks */
  {
    _id: "31",
    name: "Mountain Dew Grip Soft Drink",
    sub_category_id: "SC_9",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927058/grocery/soft_drinks/31_itstxe.webp",
    rating: 3.8,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_40",
        unit: "700 ml",
        price: 37,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "32",
    name: "Mirinda Soft Drink",
    sub_category_id: "SC_9",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927200/grocery/soft_drinks/32_z0a8em.webp",
    rating: 5.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_41",
        unit: "750 ml",
        price: 36,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_42",
        unit: "750 ml - Pack of 2",
        price: 71,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_43",
        unit: "2.25 l",
        price: 89,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "33",
    name: "Pepsi Black Zero Sugar Soft Drink",
    sub_category_id: "SC_9",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927377/grocery/soft_drinks/33_fldvs3.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_44",
        unit: "250 ml",
        price: 34,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_45",
        unit: "250 ml - Pack of 2",
        price: 67,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "34",
    name: "Thums Up Soft Drink",
    sub_category_id: "SC_9",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927609/grocery/soft_drinks/34_udimed.webp",
    rating: 3.8,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_46",
        unit: "750 ml",
        price: 38,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "35",
    name: "Coca-Cola Diet Coke Soft Drink",
    sub_category_id: "SC_9",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927697/grocery/soft_drinks/35_wijlmi.webp",
    rating: 4.3,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_46",
        unit: "300 ml",
        price: 48,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "36",
    name: "Fanta Orange Flavoured Soft Drink",
    sub_category_id: "SC_9",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683927779/grocery/soft_drinks/36_opov7h.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_47",
        unit: "750 ml",
        price: 39,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Eggs */
  {
    _id: "37",
    name: "Egg First Kadaknath Eggs",
    sub_category_id: "SC_10",
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683951639/grocery/eggs/37_uiiqxv.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_48",
        unit: "6 pieces",
        price: 129,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "38",
    name: "Egg First Duck Speciality Eggs",
    sub_category_id: "SC_10",
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683951738/grocery/eggs/38_xy6uuj.webp",
    rating: 3.8,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_49",
        unit: "6 pieces",
        price: 123,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "39",
    name: "Pure Eggs Ala Omega 3 Speciality Eggs",
    sub_category_id: "SC_10",
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683951918/grocery/eggs/39_lsaezo.webp",
    rating: 3.7,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_49",
        unit: "6 pieces",
        price: 40,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_50",
        unit: "12 pieces",
        price: 79,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "40",
    name: "Egg First Shell Brown Eggs",
    sub_category_id: "SC_10",
    veg_egg_non: "egg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952186/grocery/eggs/40_xrldtk.webp",
    rating: 2.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_51",
        unit: "12 pieces",
        price: 163,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Chicken */
  {
    _id: "41",
    name: "ITC Master Chef Desi Style Chicken Patty (Frozen)",
    sub_category_id: "SC_11",
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952350/grocery/chicken/41_pd4irp.webp",
    rating: 4.0,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_52",
        unit: "330 g",
        price: 171,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "42",
    name: "Sumeru Grilled Chicken Burger Patty (Frozen)",
    sub_category_id: "SC_11",
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952459/grocery/chicken/42_dugtvr.webp",
    rating: 3.4,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_53",
        unit: "300 g",
        price: 176,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "43",
    name: "Sumeru Wassup Chicken Nuggets (Frozen) - Buy 1 Get 1 Free",
    sub_category_id: "SC_11",

    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952563/grocery/chicken/43_e6uzne.webp",
    rating: 4.3,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_54",
        unit: "450 g + 450 g",
        price: 399,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "44",
    name: "Prasuma Original Chicken Momos (Frozen)",
    sub_category_id: "SC_11",
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952706/grocery/chicken/44_cvqc48.webp",
    rating: 2.6,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_55",
        unit: "10 pieces",
        price: 184,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "45",
    name: "ITC Master Chef Crispy Chicken Fries (Frozen)",
    sub_category_id: "SC_11",
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952767/grocery/chicken/45_lovysu.webp",
    rating: 3.7,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_56",
        unit: "280 g",
        price: 181,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "46",
    name: "ITC Master Chef Chicken Seekh Kebab (Frozen)",
    sub_category_id: "SC_11",
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683952858/grocery/chicken/46_elxvjg.webp",
    rating: 1.7,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_57",
        unit: "500 g",
        price: 315,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Fish & Seafood */
  {
    _id: "47",
    name: "ITC Master Chef Medium Prawns Peeled & Deveined (Frozen)",
    sub_category_id: "SC_12",
    veg_egg_non: "non-veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1683953095/grocery/fish_seafood/47_n5pi7g.webp",
    rating: 4.6,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_58",
        unit: "200 g",
        price: 203,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Rolling Paper */
  {
    _id: "48",
    name: "White Rolling Paper Cones - Stash Pro",
    sub_category_id: "SC_16",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685214560/grocery/Rolling%20Paper/48_wyvhyr.jpg",
    rating: 4.6,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_59",
        unit: "6 pieces",
        price: 90,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_60",
        unit: "1 pack (12 pieces)",
        price: 150,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "49",
    name: "Brown Connoisseur Single Wide Rolling Paper With Tips - Raw",
    sub_category_id: "SC_16",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685214633/grocery/Rolling%20Paper/49_a77nin.jpg",
    rating: 4.2,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_61",
        unit: "1 pack (50 + 50 pieces)",
        price: 200,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "50",
    name: "Red Alert Flavoured Blunt Wrap - Juicy Jay's",
    sub_category_id: "SC_16",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685214920/grocery/Rolling%20Paper/50_i3qkkb.avif",
    rating: 3.2,
    delivery_time_in_mins: 8,
    item_variant: [
      {
        _id: "V_62",
        unit: "1 pack (2 pieces)",
        price: 120,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Mouth Fresheners */
  {
    _id: "51",
    name: "Chandan Mitha Amla Candy",
    sub_category_id: "SC_14",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685215122/grocery/mouth_fresheners/51_e1g8nk.avif",
    rating: 4.6,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_63",
        unit: "100 g",
        price: 54,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "52",
    name: "Chandan Sweety Imli Digestive Tablets",
    sub_category_id: "SC_14",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685215237/grocery/mouth_fresheners/52_mkaicx.webp",
    rating: 4.9,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_64",
        unit: "150 g",
        price: 105,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "53",
    name: "Wonka Nerds Wild Cherry Watermelon Candy",
    sub_category_id: "SC_14",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685215348/grocery/mouth_fresheners/53_onnbuh.webp",
    rating: 4.5,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_65",
        unit: "46 g",
        price: 175,
        in_stock: false,
        default: true,
      },
    ],
  },
  /**=========== EXTRA DATA ============ */
  /* SUB CATEGORY : Fresh Vegetables */
  {
    _id: "54",
    name: "Lemon (Nimbu)",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685215663/grocery/fresh_vegetables/54_spm5i1.webp",
    rating: 4.0,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_66",
        unit: "250 g - 300 g",
        price: 46,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "55",
    name: "Orange Carrot",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685215845/grocery/fresh_vegetables/55_o3wsiz.jpg",
    rating: 4.5,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_67",
        unit: "500 g",
        price: 38,
        in_stock: false,
        default: true,
      },
      {
        _id: "V_68",
        unit: "250 g",
        price: 20,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "56",
    name: "Broccoli Smoothie Combo",
    sub_category_id: "SC_1",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685216007/grocery/fresh_vegetables/56_qilcxz.webp",
    rating: 4.7,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_69",
        unit: "Combo of 3",
        price: 285,
        in_stock: true,
        default: true,
      },
    ],
  },

  /* SUB CATEGORY : Sweet & Salty */
  {
    _id: "57",
    name: "Britannia Little Hearts Classic Biscuit",
    sub_category_id: "SC_15",

    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685217108/grocery/sweet_and_salty/57_ohevbe.webp",
    rating: 4.8,
    delivery_time_in_mins: 21,
    item_variant: [
      {
        _id: "V_70",
        unit: "26 g",
        price: 10,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_71",
        unit: "4 x 26 g - Pack of 4",
        price: 39,
        in_stock: false,
        default: false,
      },
      {
        _id: "V_72",
        unit: "2 x 75 g - Pack of 2",
        price: 57,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "58",
    name: "Parle Krackjack Original Sweet & Salty Biscuits",
    sub_category_id: "SC_15",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685217248/grocery/sweet_and_salty/58_wrz1dk.webp",
    rating: 4.8,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_73",
        unit: "400 g",
        price: 80,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_74",
        unit: "800 g",
        price: 134,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "59",
    name: "Britannia Nice Time Coconut Biscuit",
    sub_category_id: "SC_15",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685217379/grocery/sweet_and_salty/59_cudh38.webp",
    rating: 4.3,
    delivery_time_in_mins: 15,
    item_variant: [
      {
        _id: "V_75",
        unit: "143 g",
        price: 24,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_76",
        unit: "2 x 143 g - Pack of 2",
        price: 47,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "60",
    name: "Parle 20-20 Nice Sugar Sprinkled Coconut Biscuit",
    sub_category_id: "SC_15",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685217608/grocery/sweet_and_salty/60_t01l0u.webp",
    rating: 4.5,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_77",
        unit: "500 g",
        price: 77,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "61",
    name: "Orion Light & Tasty O'Rice Cracker",
    sub_category_id: "SC_15",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685217761/grocery/sweet_and_salty/61_twzjdo.webp",
    rating: 3.5,
    delivery_time_in_mins: 16,
    item_variant: [
      {
        _id: "V_78",
        unit: "500 g",
        price: 77,
        in_stock: false,
        default: true,
      },
    ],
  },
  {
    _id: "62",
    name: "Dukes Jeera Crackers Biscuit",
    sub_category_id: "SC_15",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685218007/grocery/sweet_and_salty/62_opyhhb.webp",
    rating: 3.9,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_79",
        unit: "150 g",
        price: 55,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Cookies */
  {
    _id: "63",
    name: "Open Secret Chocolate Almond Cookies",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685218311/grocery/cookies/63_gbbxnh.webp",
    rating: 4.2,
    delivery_time_in_mins: 15,
    item_variant: [
      {
        _id: "V_80",
        unit: "75 g",
        price: 94,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_81",
        unit: "2 x 75 g - Pack of 2",
        price: 94,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "64",
    name: "Cadbury Chocobakes Choco Chip Cookies",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685247210/grocery/cookies/64_ok11mk.webp",
    rating: 4.8,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_82",
        unit: "167 g",
        price: 68,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "65",
    name: "Open Secret Nutty Cookies Gift Box (Assorted) + Open Secret Un-Junked Choco Almond Brownie Combo",
    sub_category_id: "SC_5",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685247464/grocery/cookies/65_svxi6p.webp",
    rating: 4.2,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_83",
        unit: "150 g + 30 g",
        price: 340,
        in_stock: false,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Rice */
  {
    _id: "66",
    name: "Daawat Rozana Super Basmati Rice",
    sub_category_id: "SC_7",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685247972/grocery/rice/66_kk6opb.webp",
    rating: 4.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_84",
        unit: "1 kg",
        price: 79,
        in_stock: false,
        default: true,
      },
      {
        _id: "V_85",
        unit: "5 kg",
        price: 359,
        in_stock: false,
        default: false,
      },
    ],
  },
  {
    _id: "67",
    name: "India Gate Weight Watchers Special Brown Rice",
    sub_category_id: "SC_7",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685256205/grocery/rice/67_imgbe9.webp",
    rating: 4.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_86",
        unit: "1 kg",
        price: 143,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "68",
    name: "Kohinoor Charminar Select Basmati Rice",
    sub_category_id: "SC_7",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685256205/grocery/rice/68_ugal2d.webp",
    rating: 4.0,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_87",
        unit: "1 kg",
        price: 106,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_88",
        unit: "5 kg",
        price: 501,
        in_stock: true,
        default: false,
      },
    ],
  },
  /* SUB CATEGORY : Poha, Daliya & Other Grains */
  {
    _id: "69",
    name: "Vijay Premium Quality Poha",
    sub_category_id: "SC_8",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685256311/grocery/poha_daliya_rains/69_tyr7vn.webp",
    rating: 4.3,
    delivery_time_in_mins: 16,
    item_variant: [
      {
        _id: "V_89",
        unit: "1 kg",
        price: 61,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "70",
    name: "True Elements Quinoa + Fruit and Nut Muesli Combo",
    sub_category_id: "SC_8",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685256311/grocery/poha_daliya_rains/70_pawhwo.webp",
    rating: 3.7,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_90",
        unit: "1 kg + 250 g",
        price: 250,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "71",
    name: "Yoga Bar Organic Quinoa",
    sub_category_id: "SC_8",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685275907/grocery/poha_daliya_rains/71_crinoc.webp",
    rating: 3.5,
    delivery_time_in_mins: 19,
    item_variant: [
      {
        _id: "V_91",
        unit: "1.5 kg",
        price: 377,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Rolling Paper */
  {
    _id: "72",
    name: "Activated Charcoal Smoking Filter (Slim) - SLIMJIM",
    sub_category_id: "SC_16",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685276288/grocery/Rolling%20Paper/72_yqdvme.webp",
    rating: 4.2,
    delivery_time_in_mins: 17,
    item_variant: [
      {
        _id: "V_92",
        unit: "1 pack",
        price: 200,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "73",
    name: "Classic Filter Tips & Rolling Paper (King Size) - Raw",
    sub_category_id: "SC_16",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685276724/grocery/Rolling%20Paper/73_ek5mmr.webp",
    rating: 4.2,
    delivery_time_in_mins: 17,
    item_variant: [
      {
        _id: "V_93",
        unit: "1 pack (32 pieces)",
        price: 115,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_94",
        unit: "1 pack (32 + 32 pieces)",
        price: 170,
        in_stock: false,
        default: false,
      },
    ],
  },
  /* SUB CATEGORY : Mouth Fresheners */
  {
    _id: "74",
    name: "Center Fresh Sugar Free Mint Candy",
    sub_category_id: "SC_14",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685277466/grocery/Rolling%20Paper/74_r2cumy.webp",
    rating: 4.6,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_95",
        unit: "35 g",
        price: 90,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Cigarettes */
  {
    _id: "75",
    name: "Benson & Hedges Blue Gold",
    sub_category_id: "SC_13",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685278343/grocery/cigarettes/75_u9gsnd.webp",
    rating: 4.3,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_96",
        unit: "1 pack (20 pieces)",
        price: 340,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "76",
    name: "Classic Ice Burst",
    sub_category_id: "SC_13",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685278699/grocery/cigarettes/76_xske8u.jpg",
    rating: 4.0,
    delivery_time_in_mins: 16,
    item_variant: [
      {
        _id: "V_97",
        unit: "1 pack (10 pieces)",
        price: 165,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_98",
        unit: "1 pack (20 pieces)",
        price: 340,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "77",
    name: "Gold Flake Kings Lights",
    sub_category_id: "SC_13",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685278838/grocery/cigarettes/77_deiupd.jpg",
    rating: 4.3,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_99",
        unit: "1 pack (20 pieces)",
        price: 340,
        in_stock: true,
        default: true,
      },
    ],
  },
  /* SUB CATEGORY : Fruit Juices */
  {
    _id: "78",
    name: "Real Fruit Power Cranberry Juice",
    sub_category_id: "SC_17",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685884885/grocery/fruit_juices/78_mzfzhj.webp",
    rating: 3.8,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_100",
        unit: "1 l",
        price: 130,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_101",
        unit: "2 x 1 l",
        price: 234,
        in_stock: true,
        default: false,
      },
      {
        _id: "V_102",
        unit: "3 x 1 l",
        price: 343,
        in_stock: true,
        default: false,
      },
    ],
  },
  {
    _id: "79",
    name: "B Natural Select - No Added Sugar Mixed Fruit Juice",
    sub_category_id: "SC_17",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685885005/grocery/fruit_juices/79_pg8fvy.webp",
    rating: 4.8,
    delivery_time_in_mins: 18,
    item_variant: [
      {
        _id: "V_103",
        unit: "200 ml",
        price: 54,
        in_stock: true,
        default: true,
      },
    ],
  },
  {
    _id: "80",
    name: "Raw Pressery Alphonso Mango Juice",
    sub_category_id: "SC_17",
    veg_egg_non: "veg",
    image:
      "https://res.cloudinary.com/dcu6sympq/image/upload/v1685885065/grocery/fruit_juices/80_b6ceua.webp",
    rating: 4.2,
    delivery_time_in_mins: 20,
    item_variant: [
      {
        _id: "V_104",
        unit: "1 l",
        price: 232,
        in_stock: true,
        default: true,
      },
      {
        _id: "V_105",
        unit: "2 x 1l",
        price: 430,
        in_stock: false,
        default: false,
      },
    ],
  },
];
