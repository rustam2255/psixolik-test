import  { useState } from "react";

const questions = [
  {
    id: 1,
    text: "Odamlar bilan muloqot qilish sizga qanday ta’sir qiladi?",
    options: [
      { value: "A", label: "Men muloqotdan zavqlanaman." },
      { value: "B", label: "Juda faol bo‘laman." },
      { value: "C", label: "Ko‘pincha odamlarning kayfiyatiga moslashaman." },
      { value: "D", label: "Tinchgina kuzataman." },
    ],
  },
  {
    id: 2,
    text: "Qiyin vaziyatlarda qanday harakat qilasiz?",
    options: [
      { value: "A", label: "Tezda yechim topishga harakat qilaman." },
      { value: "B", label: "Vaziyatni boshqarishga intilaman." },
      { value: "C", label: "Ko‘p o‘ylab, ehtiyotkorlik bilan harakat qilaman." },
      { value: "D", label: "Sekin-asta, bosqichma-bosqich harakat qilaman." },
    ],
  },
  {
    id: 3,
    text: "Sizning odatiy kayfiyatingiz qanday?",
    options: [
      { value: "A", label: "Baxtli va ijobiy." },
      { value: "B", label: "Emotsional va o‘zgaruvchan." },
      { value: "C", label: "Tinch va tushkun." },
      { value: "D", label: "Barqaror va osoyishta." },
    ],
  },
  {
    id: 4,
    text: "Vaziyatni boshqarish qobiliyatingiz qanday?",
    options: [
      { value: "A", label: "Tez va oson boshqaraman." },
      { value: "B", label: "Hamma narsani o‘zim hal qilmoqchiman." },
      { value: "C", label: "Shubhalanib qaror qabul qilaman." },
      { value: "D", label: "Sekin, lekin o‘ylab harakat qilaman." },
    ],
  },
  {
    id: 5,
    text: "Do‘stlaringiz bilan o‘tkazgan vaqtingizni qanday tasvirlaysiz?",
    options: [
      { value: "A", label: "Juda qiziqarli va faol." },
      { value: "B", label: "Qiziqarli, lekin ba’zan xotirjamlikni afzal ko‘raman." },
      { value: "C", label: "Aksariyat vaqt o‘zimni ichki jahonimda topaman." },
      { value: "D", label: "Tinch va oddiy suhbatlar bilan o‘tkazaman." },
    ],
  },
  {
    id: 6 ,
    text: "Ko‘proq nima qilasiz?",
    options: [
      { value: "A", label: "Ko‘proq ijtimoiy faoliyatga qo‘shilaman." },
      { value: "B", label: " Xarakterim o‘zgarmas, lekin ba’zan yangi odamlar bilan tanishishni yaxshi ko‘raman." },
      { value: "C", label: "O‘zimni yolg‘iz qoldirishni afzal ko‘raman." },
      { value: "D", label: "Yangi ma’lumotlarni o‘rganishga va ichki o‘zgarishlarga yo‘naltiraman." },
    ],
  },
  {
    id: 7 ,
    text: "O‘zingizni qanday baholaysiz?",
    options: [
      { value: "A", label: "Men kuchli va erkinman." },
      { value: "B", label: "Tezda o‘zgaraman, lekin ba’zan ishonchsizman." },
      { value: "C", label: "Ko‘proq passiv va shubhalanaman." },
      { value: "D", label: "Men barqarorman, lekin ba’zida noaniqlikni sezaman." },
    ],
  },
  {
    id: 8 ,
    text: "Qanday o‘zgarishlarga nisbatan qanday munosabatdasiz?",
    options: [
      { value: "A", label: "Men yangi o‘zgarishlarga tezda moslashaman." },
      { value: "B", label: "Yangi narsalarni boshlashda ishtiyoqim kuchli, lekin ba’zan tashvishlanaman." },
      { value: "C", label: "Yangi o‘zgarishlar meni xavotirga soladi." },
      { value: "D", label: "O‘zgarmaslikni afzal ko‘raman, va o‘zgargan narsalarga ehtiyotkorlik bilan qarayman." },
    ],
  },
  {
    id: 9 ,
    text: "Sizga qanday ishlash uslubi yoqadi?",
    options: [
      { value: "A", label: "Doimo tez va samarali ishlashga harakat qilaman." },
      { value: "B", label: "Men o‘z ishlarimni kengaytirishga harakat qilaman." },
      { value: "C", label: " Men ko‘pincha o‘zimni uzoq vaqt ishlashga moslashtiraman." },
      { value: "D", label: "Men tinch va barqaror ishni afzal ko‘raman." },
    ],
  },
  {
    id: 10 ,
    text: "O‘zingizni qanday his qilasiz?",
    options: [
      { value: "A", label: "Baxtli va yaxshi kayfiyatda." },
      { value: "B", label: "O‘zgaruvchan va ba’zan tushkun." },
      { value: "C", label: "Ko‘pincha kayfiyatim past bo‘ladi." },
      { value: "D", label: "Ba’zan haroratim past, lekin yaxshilanishni kutaman." },
    ],
  },
];

const TestForm = ({ onComplete }) => {
  const [answers, setAnswers] = useState({});
  const [name, setName] = useState("");

  const handleAnswerChange = (questionId, value) => {
    setAnswers({ ...answers, [questionId]: value });
  };

  const calculateResult = () => {
    const scores = Object.values(answers).reduce((total, answer) => {
      return total + (answer === "A" ? 1 : answer === "B" ? 2 : answer === "C" ? 3 : 4);
    }, 0);

    let type = "";
    if (scores <= 19) type = "Sangvinik";
    else if (scores <= 29) type = "Xolerik";
    else if (scores <= 39) type = "Melancholik";
    else type = "Flegmatik";

    onComplete(name, type);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-6">Temperamentni Aniqlash Testi</h1>
      <input
        type="text"
        placeholder="Ismingizni kiriting"
        className="w-full p-3 mb-4 border rounded-md"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {questions.map((q) => (
        <div key={q.id} className="mb-6">
          <p className="font-semibold mb-3">{q.text}</p>
          {q.options.map((option) => (
            <label key={option.value} className="block mb-2">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option.value}
                onChange={(e) => handleAnswerChange(q.id, option.value)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={calculateResult}
        className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition"
      >
        Tugatish
      </button>
      
    </div>
    
  );
};

export default TestForm;
