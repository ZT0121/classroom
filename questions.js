// ==========================================
// 📚 媽媽的題庫資料中心 (MOM'S DATABASE)
// ==========================================

const DB = {
    hunter: {
        // --- 國語科 (只留正確答案，程式會自己生出錯誤選項) ---
        chinese_zhuyin: [
            { q: "貓", a: "ㄇㄠ" },
            { q: "咪", a: "ㄇㄧ" },
            { q: "鵝", a: "ㄜˊ" },
            { q: "河", a: "ㄏㄜˊ" },
            { q: "笑", a: "ㄒㄧㄠˋ" },
            { q: "龜", a: "ㄍㄨㄟ" },
            { q: "蔔", a: "˙ㄅㄛ" },
            { q: "暈", a: "ㄩㄣ" },
            { q: "公", a: "ㄍㄨㄥ" },
            { q: "三", a: "ㄙㄢ" },
            { q: "山", a: "ㄕㄢ" }
        ],
        
        // --- 英文科 (雙語繪本) ---
        english: [
            { q: "Eyes", hint: "👁️", audio: "eyes" },
            { q: "Nose", hint: "👃", audio: "nose" },
            { q: "Mouth", hint: "👄", audio: "mouth" },
            { q: "Clap", hint: "👏", audio: "clap" },
            { q: "Sit down", hint: "🪑", audio: "sit down" },
            { q: "Monster", hint: "👹", audio: "monster" }
        ],

        // --- 數學科 (南一版參數) ---
        mathUnits: [
            { id: "h_u3", name: "分與合", desc:"10可以分成...?", type: "decomp", range: 10 },
            { id: "h_u6", name: "加一加", desc:"10以內的加法", type: "add", range: 10 },
            { id: "h_u8", name: "減一減", desc:"10以內的減法", type: "sub", range: 10 },
            { id: "h_u9", name: "讀鐘錶", desc:"整點與半點", type: "clock", range: "half" }
        ]
    },

    angus: {
        // --- 弟弟專區 ---
        zhuyin: "ㄅㄆㄇㄈㄉㄊㄋㄌㄍㄎㄏㄐㄑㄒㄓㄔㄕㄖㄗㄘㄙㄧㄨㄩㄚㄛㄜㄝㄞㄟㄠㄡㄢㄣㄤㄥㄦ".split(""),
        
        mathUnits: [
            { id: "a_count", name: "數數練習", desc:"數數看有幾個?", type: "count", range: 30 },
            { id: "a_clock", name: "看時鐘", desc:"長針指著12", type: "clock", range: "full" }
        ],
        
        english: [
            { q: "Red", hint: "🔴", audio: "red" },
            { q: "Blue", hint: "🔵", audio: "blue" },
            { q: "Green", hint: "🟢", audio: "green" },
            { q: "Cat", hint: "🐱", audio: "cat" },
            { q: "Dog", hint: "🐶", audio: "dog" },
            { q: "Apple", hint: "🍎", audio: "apple" },
            { q: "Banana", hint: "🍌", audio: "banana" }
        ]
    }
};
