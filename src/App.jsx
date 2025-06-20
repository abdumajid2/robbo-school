import React from 'react';
import { Button, Modal, Input, Checkbox } from 'antd';


import { useState } from 'react';
import g1 from '#/g1.jpg';
import g2 from '#/g2.jpg';
import g3 from '#/g3.jpg';
import g4 from '#/g4.jpg';
import g5 from '#/g5.jpg';
import imge1 from '#/imge1.png';


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

const App = () => {
    let [users, setUsers] = useState([
        {
            name: 'Ирина Лайм',
            job: 'Преподаватель по робототехники',
            desc: 'Педагог дополнительного образования, преподаватель робототехники и программирования для детей 6-12 лет. Имеет опыт работы в образовательных учреждениях более 10 лет.',
            id: 1,
            status: true,
            image: g1,
        },
        {
            name: 'Марина Орлова',
            job: 'преподаватель по робототехнике',
            desc: 'Педагог дополнительного образования, преподаватель робототехники и программирования для детей 6-12 лет. Имеет опыт работы в образовательных учреждениях более 10 лет.',
            id: 2,
            status: false,
            image: g2,
        },
        {
            name: 'Максим Петров',
            job: 'преподаватель по программированию',
            desc: 'Педагог дополнительного образования, преподаватель робототехники и программирования для детей 6-12 лет. Имеет опыт работы в образовательных учреждениях более 10 лет.',
            id: 3,
            status: true,
            image: g3,
        },
        {
            name: 'Константин Назаров',
            job: 'преподаватель по робототехнике',
            desc: 'Педагог дополнительного образования, преподаватель робототехники и программирования для детей 6-12 лет. Имеет опыт работы в образовательных учреждениях более 10 лет.',
            id: 4,
            status: false,
            image: g4,
        },
        {
            name: 'Лиза Весенняя',
            job: 'преподаватель по программированию',
            desc: 'Педагог дополнительного образования, преподаватель робототехники и программирования для детей 6-12 лет. Имеет опыт работы в образовательных учреждениях более 10 лет.',
            id: 5,
            status: true,
            image: g5,
        },
    ]);

    const onChangeCheckbox = (e) => {
        const isChecked = e.target.checked;
        console.log(`checked = ${isChecked}`);
        
    };

    
    function deleteUser(id) {
        setUsers(users.filter((e) => e.id !== id));
    }

    
    const [editName, setEditName] = useState('');
    const [editJob, setEditJob] = useState('');
    const [editStatus, setEditStatus] = useState(true); 
    const [idx, setIdx] = useState(null);
    const [editModal, setEditModal] = useState(false);

   
    function editUser(user) {
        setEditModal(true);
        setEditName(user.name);
        setEditJob(user.job);
        setEditStatus(user.status);
        setIdx(user.id);
    }

   
    function handleEditOk() {
        const updated = users.map(user =>
            user.id === idx
                ? { ...user, name: editName, job: editJob, status: editStatus } 
                : user
        );
        setUsers(updated);
        setEditModal(false);
    }

    function handleEditCancel() {
        setEditModal(false);
    }

    return (
       
        <div className='max-w-[1300px] m-auto px-4'> 
            <header className='bg-[#141024] h-[100vh]'>
                <nav className='lg:flex flex justify-between items-center lg:justify-between mb-13 p-2 lg:items-center text-white'>
                    <h2 className='text-2xl font-bold'>ROBO.SCHOOL</h2>
                    <ul className='lg:flex hidden lg:gap-10'>
                        <li>О школе</li>
                        <li>Тренеры</li>
                        <li>Стоимость</li>
                    </ul>
                    <span className='text-xl hidden lg:block'><strong>+7 800 000 11 22</strong></span>
                    <div className='lg:hidden flex gap-4 text-2xl'>
                        <i className="fa-solid fa-phone-flip"></i>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
                <article className='lg:flex lg:items-center lg:flex-row flex flex-col-reverse items-center lg:justify-center p-2'>
                    <div className='w-[45%] flex flex-col gap-6 text-white items-start'>
                        <h1 className='text-6xl font-bold'>ROBO SCHOOL</h1>
                        <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
                        <Button type="primary" danger>
                            Записаться на курс
                        </Button>
                    </div>
                    <img className='w-[40%]' src={imge1} alt="Robo School illustration" /> 
                </article>
            </header>
            <main className='mt-[100px]'>
                <h2 className='text-xl ml-10 lg:w-[600px]'><strong>Robo School</strong> – учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</h2>
                <article className='lg:flex mt-[80px] lg:justify-between lg:items-center lg:flex-row flex flex-col gap-4 text-center p-2'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-6xl font-bold text-red-500'>10</h2>
                        <p>УМК по различным <br /> направлениям по робототехнике</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-6xl font-bold text-red-500'>20</h2>
                        <p>Школ, в которых запущена <br /> робототехника</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-6xl font-bold text-red-500'>100</h2>
                        <p>Педагогов прошедших курсы <br /> повышения квалификации</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='text-6xl font-bold text-red-500'>10 000</h2>
                        <p>Обученных детей на базе <br /> собственных центров</p>
                    </div>
                </article>
            </main>

            <section className='bg-gray-100 p-6 mt-[50px]'>
                <h2 className='text-5xl font-bold'>Что вы получите после курса</h2>
                <div className='lg:flex lg:justify-end mt-4 flex justify-center'>
                    <button className='bg-white p-2 shadow-2xl rounded-md '>При наличии свободных мест</button>
                </div>
                <article className='lg:flex lg:justify-between flex flex-col gap-4 lg:flex-row mt-[30px]'>
                    <div className='lg:w-[300px] '>
                        <h2 className='text-center text-2xl font-semibold'>Удостоверение</h2>
                        <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
                    </div>
                    <div className='lg:w-[300px] '>
                        <h2 className='text-center text-2xl font-semibold'>Знания</h2>
                        <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
                    </div>
                    <div className='lg:w-[300px] '>
                        <h2 className='text-center flex gap-3 text-2xl font-semibold'>Практику <p className='w-[35px] h-[35px] text-center rounded-full bg-gray-300'>i</p></h2>
                        <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
                    </div>
                </article>
            </section>

            <section>
                <h2 className='text-center lg:text-5xl font-bold mb-[80px] mt-[50px]'>Профессиональные тренеры</h2>
                <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    // autoPlay={true}
                    // interval={5000}
                    centerMode={true}
                    centerSlidePercentage={33.33} 
                    emulateTouch={true}
                    className="presentation-mode"
                    
                >
                    {users.map((e) =>
                        <div key={e.id} className="p-4 flex flex-col  items-center">
                            
                            <img src={e.image} alt={e.name} className="w-full h-auto rounded-md object-cover" style={{ maxHeight: '300px' }} /> {/* Добавлен object-cover и max-height для лучшего вида */}
                            <h2 className="lg:text-xl font-semibold mt-2">{e.name}</h2>
                            <p className="text-gray-600 hidden lg:block text-center">{e.job}</p> 
                            <p className='text-red-400 cursor-pointer'>Подробнее</p> 
                            <div className='lg:flex flex flex-col lg:flex-row gap-2 mt-4 lg:justify-center'>
                                <Button onClick={() => deleteUser(e.id)} type="primary" danger>
                                    <i className="fa-regular fa-trash-can"></i>
                                   
                                </Button>
                                <Button onClick={() => editUser(e)} type="primary" danger>
                                    <i className="fa-solid fa-user-pen"></i>
                                  
                                </Button>
                                <Button type="primary" danger>
                                    <i className="fa-solid fa-circle-info"></i>
                                   
                                </Button>
                                <Checkbox checked={e.status} onChange={onChangeCheckbox}></Checkbox> 
                            </div>
                        </div>
                    )}
                </Carousel>
                <Modal
                    title="Edit User"
                    open={editModal}
                    onOk={handleEditOk} 
                    onCancel={handleEditCancel} 
                    closeIcon={<span aria-label="Custom Close Button">×</span>} 
                >
                    <label htmlFor="editNameInput">Имя:</label> 
                    <Input id="editNameInput" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Имя..." className="mb-2" /> <br />
                    
                    <label htmlFor="editJobInput">Должность:</label> 
                    <Input id="editJobInput" value={editJob} onChange={(e) => setEditJob(e.target.value)} placeholder="Должность..." className="mb-2" />
                    
                    <label htmlFor="editStatusSelect">Статус:</label>
                    <select
                        id="editStatusSelect"
                        value={editStatus.toString()} 
                        onChange={(e) => setEditStatus(e.target.value === 'true')} 
                        className="w-full p-2 border rounded-md"
                    >
                        <option value="true">Активный</option>
                        <option value="false">Неактивный</option>
                    </select>
                </Modal>
            </section>

            <section className='mt-[80px]'>
              <h2 className='mb-[50px] text-4xl font-bold ml-4'>Выберите нужный пакет</h2>

              <article className='lg:flex lg:justify-between flex flex-col gap-4 lg:flex-row lg:items-center items-center'>
                <div className='lg:w-[300px] h-[400px] w-[200px] flex flex-col justify-between items-center gap-6 bg-[#141024] text-white p-4 rounded-xl shadow-lg'>
                  <span className='text-3xl font-bold'>- PRO -</span><br />
                  <h2 className='text-4xl'> 20.000 ₽</h2>
                  <p>УМК по робототетхнике <br /> и программированию</p><br />
                  <Button type="primary"  danger>Оставить заявку</Button>
                </div>
                <div className='lg:w-[300px] border-gray-100 border h-[350px] w-[200px] flex flex-col  items-center gap-4 bg-white text-black p-4 rounded-xl shadow-lg'>
                  <span className='text-3xl font-bold'>- PRO -</span><br />
                  <h2 className='text-4xl'> 20.000 ₽</h2>
                  <p>УМК по робототетхнике <br /> и программированию</p><br />
                  <Button type="primary"  danger>Оставить заявку</Button>
                </div>
                <div className='lg:w-[300px] h-[350px] border-gray-100 border w-[200px] flex flex-col   items-center gap-4 bg-white text-black p-4 rounded-xl shadow-lg'>
                  <span className='text-3xl font-bold'>- PRO -</span><br />
                  <h2 className='text-4xl'> 20.000 ₽</h2>
                  <p>УМК по робототетхнике <br /> и программированию</p><br />
                  <Button type="primary"  danger>Оставить заявку</Button>
                </div>
              </article>
            </section>

            <footer className='mt-[80px] bg-[#D52027] text-white '>
              <section className='lg:flex lg:justify-around lg:items-center p-4 flex flex-col gap-4 lg:flex-row'>
                <article className='flex flex-col gap-4'>
                  <h2 className='lg:text-2xl font-bold'>Запишитесь на курс <br /> со скидкой 10%</h2>
                  <p>Акция действительна до 10 марта 2022 года</p>
                </article>
                <article className='flex flex-col gap-4'>
                  <input className='border border-gray-300 bg-white placeholder-gray-400 px-6 rounded-lg py-2'  type="text"  placeholder='Имя' />
                  <input className='border border-gray-300 bg-white placeholder-gray-400 px-6 rounded-lg py-2'  type="number" placeholder='Номер телефона' />
                  <input className='border border-gray-300 bg-white placeholder-gray-400 px-6 rounded-lg py-2'  type="email" placeholder='Email' />
                  <button className='bg-[#141024] p-2 rounded-lg'>Оформить заявку</button>
                </article>
              </section><br />
              <article className='bg-[#141024] text-white flex justify-between items-center p-4'>
                <div>
                  <h2 className='text-xl'>ROBO.SCHOOL</h2><br />
                  <p className='text-[14px]'>© ROBO.SCHOOL</p>
                </div>
                <p className='text-xl'>+7 800 000 11 22</p>
              </article>
            </footer>
        </div> 
    );
};

export default App;