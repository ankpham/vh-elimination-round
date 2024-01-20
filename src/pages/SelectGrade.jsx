import React from 'react';
import { Link } from 'react-router-dom';


const SelectGrade = () => {
    return (
        <>
        <div className="selection">
            <div className="container">
                <nav className='header'/>
                <nav className='header'/>
                <div className='selection-container-grade'>
                    <div className="grade">
                        <Link to={"/select-category-and-points/mg"} className="select background-yellow">Lớp Mẫu Giáo</Link>
                        <Link to={"/select-category-and-points/vl"} className="select background-orange">Lớp Vỡ Lòng</Link>
                        <Link to={"/select-category-and-points/1"} className="select background-red">Lớp 1</Link>
                        <Link to={"/select-category-and-points/2"} className="select background-pink">Lớp 2</Link>
                        <Link to={"/select-category-and-points/3"} className="select background-orchid">Lớp 3</Link>
                        <Link to={"/select-category-and-points/4"} className="select background-purple">Lớp 4</Link>
                        <Link to={"/select-category-and-points-567/5"} className="select background-lightblue">Lớp 5</Link>
                        <Link to={"/select-category-and-points-567/6"} className="select background-cyan">Lớp 6</Link>
                        <Link to={"/select-category-and-points-567/7"} className="select background-green">Lớp 7</Link>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SelectGrade;