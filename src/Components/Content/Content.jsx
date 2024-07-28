import React, { useEffect, useState } from 'react';
import './Content.css';
import { HiMiniChevronDoubleRight } from "react-icons/hi2";

function Content({ data }) {
    const [details, setDetails] = useState();
    const [activeBtn, setActiveBtn] = useState();

    const handleClick = (id) => {
        setActiveBtn(id);
        const person = data.find((value) => value.id === id)
        setDetails(person);
    }

    useEffect(() => {
      setDetails(data[0]);
      setActiveBtn(data[0].id);
    }, [])

    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="row">
                <h1 className='text-center mb-5 title'>Experience</h1>
                <div className="col-md-3 d-flex flex-column btns-container">
                    {data.map((value) => {
                        return (
                            <button key={value.id} onClick={() => handleClick(value.id)} className={`btn text-uppercase name-btn ${activeBtn === value.id ? 'active-btn' : ''}`}>{value.name}</button>
                        )
                    })}
                </div>
                {/* <div className="col-md-3 d-flex flex-column btns-container">
                    <button className='btn text-uppercase name-btn'>Bob</button>
                    <button className='btn text-uppercase name-btn'>john</button>
                    <button className='btn text-uppercase name-btn'>Albert</button> */}
                {/* </div> */}
                <div className="col-md-9">
                    <div className="text-container">
                        {details ?
                            <>
                                <h3>{details.job}</h3>
                                <button className='text-uppercase show-name' disabled>{details.name}</button>
                                <p className='experience mt-2'>{details.experience}</p>
                                <div className="text-para d-flex">
                                    <div className="icon me-3">
                                        <HiMiniChevronDoubleRight />
                                    </div>
                                    <div className="text">
                                        <p className='info'>{details.info1}</p>
                                    </div>
                                </div>
                                <div className="text-para d-flex">
                                    <div className="icon me-3">
                                        <HiMiniChevronDoubleRight />
                                    </div>
                                    <div className="text">
                                        <p className='info'>{details.info2}</p>
                                    </div>
                                </div>
                                <div className="text-para d-flex">
                                    <div className="icon me-3">
                                        <HiMiniChevronDoubleRight />
                                    </div>
                                    <div className="text">
                                        <p className='info'>{details.info3}</p>
                                    </div>
                                </div>
                                <div className="btn-container d-flex justify-content-center align-items-center">
                                    <button className='btn more-btn'>MORE INFO</button>
                                </div>
                            </> :
                            <p>choose a person to view details</p>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;

