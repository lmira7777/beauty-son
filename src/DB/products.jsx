import LiquidFoundationPNG from '../assets/Products/Liquid-Foundation.png';
import MakeupPalettePNG from '../assets/Products/Makeup-Palette.png';
import BrighteningCreamPNG from '../assets/Products/Brightening-Cream.png';
import GiorgioArmaniFoundationPNG from '../assets/Products/Giorgio-Armani-Foundation.png';
import VolcanicElixirPNG from '../assets/Products/Volcanic-Elixir.png';
import RefineePNG from '../assets/Products/Refinee.png';
import EssenceSunSPF45PNG from '../assets/Products/Essence-Sun-SPF45.png';
import GucciBloomPerfumePNG from '../assets/Products/Gucci-Bloom-Perfume.png';
import JilSanderSprayPNG from '../assets/Products/Jil-Sander-Spray.png';
import MFBrighteningCreamPNG from '../assets/Products/MF-Brightening-Cream.png';
import MFCosmeticShampooPNG from '../assets/Products/MF-Cosmetic-Shampoo.png';
import MFEditionPerfumePNG from '../assets/Products/MF-Edition-Perfume.png';
import MFMoisturiserPNG from '../assets/Products/MF-Moisturiser.png';
import N5ChanelPerfumePNG from '../assets/Products/N5-Chanel-Perfume.png';
import VolcanicElixir2PNG from '../assets/Products/Volcanic-Elixir2.png';

import comment1 from '../assets/comments/Ellipse 956.png';
import comment2 from '../assets/comments/Ellipse 9356.png';

const colors = ['Blue', 'Green', 'Red', 'Yellow', 'Gray'];
const ratings = ['4', '5'];
const categories = ['Skin Care', 'Body Care', 'Hair Care', 'Accessories'];

const aboutText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.";
const descriptionsText = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

const products = [
    {
        id: '1',
        name: 'Liquid Foundation',
        bestSeller : true ,
        img: LiquidFoundationPNG,
        price: '150',
        discountPrice: '120',
        stock: "2",
        rating: '5',
        colors: 'Red',
        categories: 'Skin Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'large',
    },
    {
        id: '2',
        name: 'Makeup Palette',
        bestSeller : true ,
        img: MakeupPalettePNG,
        price: '120',
        discountPrice: '80',
        stock: "55",
        rating: '4',
        colors: 'Blue',
        categories: 'Accessories',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'medium',
    },
    {
        id: '3',
        name: 'Brightening Cream',
        img: BrighteningCreamPNG,
        price: '180',
        discountPrice: '150',
        stock: "30",
        rating: '3',
        colors: 'Green',
        categories: 'Skin Care',
        bestSeller : true ,
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'small',
    },
    {
        id: '4',
        name: 'Giorgio Armani Foundation',
        img: GiorgioArmaniFoundationPNG,
        price: '300',
        discountPrice: '250',
        bestSeller : true ,
        stock: "25",
        rating: '5',
        colors: 'Yellow',
        categories: 'Skin Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'large',
    },
    {
        id: '5',
        name: 'Volcanic Elixir',
        img: VolcanicElixirPNG,
        bestSeller : true ,
        price: '230',
        discountPrice: '180',
        stock: "60",
        rating: '4',
        colors: 'Gray',
        categories: 'Skin Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'medium',
    },
    {
        id: '6',
        name: 'Refinee ‘C’ Serum',
        img: RefineePNG,
        bestSeller : true ,
        price: '200',
        discountPrice: '220',
        stock: "35",
        rating: '4',
        colors: 'Red',
        categories: 'Skin Care',

        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'small',
    },
    {
        id: '7',
        name: 'Essence Sun SPF45',
        img: EssenceSunSPF45PNG,
        price: '40',
        discountPrice: '35',
        stock: "75",
        rating: '3',
        colors: 'Yellow',
        categories: 'Body Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'medium',
    },
    {
        id: '8',
        name: 'Gucci Bloom Perfume',
        img: GucciBloomPerfumePNG,
        price: '120',
        discountPrice: '100',
        stock: "50",
        rating: '5',
        colors: 'Blue',
        categories: 'Body Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'large',
    },
    {
        id: '9',
        name: 'Jil Sander Spray',
        img: JilSanderSprayPNG,
        price: '80',
        discountPrice: '70',
        stock: "40",
        rating: '4',
        colors: 'Green',
        categories: 'Body Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'small',
    },
    {
        id: '10',
        name: 'MF Brightening Cream',
        img: MFBrighteningCreamPNG,
        price: '200',
        discountPrice: '170',
        stock: "65",
        rating: '4',
        colors: 'Red',
        categories: 'Skin Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'medium',
    },
    {
        id: '11',
        name: 'MF Cosmetic Shampoo',
        img: MFCosmeticShampooPNG,
        price: '90',
        discountPrice: '75',
        stock: "20",
        rating: '3',
        colors: 'Gray',
        categories: 'Hair Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'small',
    },
    {
        id: '12',
        name: 'MF Edition Perfume',
        img: MFEditionPerfumePNG,
        price: '150',
        discountPrice: '130',
        stock: "45",
        rating: '4',
        colors: 'Yellow',
        categories: 'Body Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'large',
    },
    {
        id: '13',
        name: 'MF Moisturiser',
        img: MFMoisturiserPNG,
        price: '110',
        discountPrice: '95',
        stock: "50",
        rating: '5',
        colors: 'Green',
        categories: 'Skin Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'medium',
    },
    {
        id: '14',
        name: 'N5 Chanel Perfume',
        img: N5ChanelPerfumePNG,
        price: '220',
        discountPrice: '200',
        stock: "25",
        rating: '5',
        colors: 'Red',
        categories: 'Body Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'large',
    },
    {
        id: '15',
        name: 'Volcanic Elixir2',
        img: VolcanicElixir2PNG,
        price: '190',
        discountPrice: '170',
        stock: "30",
        rating: '4',
        colors: 'Blue',
        categories: 'Skin Care',
        about: aboutText,
        descriptions: descriptionsText,
        comments: [
            {
                Photo: comment1,
                name: 'Perry Wilson',
                userRating: '5',
                title: 'Mind blowing product, I really like it 😍',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            },
            {
                Photo: comment2,
                name: 'Smith Deo',
                userRating: '5',
                title: 'My wife is very happy with this Product',
                text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
                date: 'Jan 26, 2023'
            }
        ],
        size: 'small',
    },
];

export default products;
