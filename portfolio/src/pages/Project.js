import React, { Component } from 'react';
import './Project.scss';
import home from 'asset/home.PNG';

class Project extends Component {
    render() {
        return (
            <div className="Paper">
                <div className="title">
                    <h2>Burpy</h2>
                    <p>이미지 인식 기반 음료 정보 검색 및 공유 서비스</p>
                </div>
                <div className="content">
                    <div className="img-content">
                        <img className="img" src={home} />
                    </div>
                    <div className="project-info">
                        <div>
                            <h2>Team</h2>
                            <p><strong>Web</strong>: 정석호, 이윤상</p>
                            <p><strong>Unity</strong>: 박건희, 최종인</p>
                            <p><strong>UX/UI</strong>: 김지호</p>
                        </div>
                        <div>
                            <h2>내 역할</h2>
                            <p>Web 클라이언트 개발, API서버 개발</p>
                        </div>
                        <div>
                            <h2>사용 기술</h2>
                            <p><strong>- Web</strong>: React.js, Node.js, express, mongoose, redux</p>
                            <p><strong>- Unity</strong>: C#, Tensorflow, Keras, Django</p>
                            <p><strong>- DataBase</strong>: MongoDB</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>주요 기능</h2>
                    <p>소셜로그인, 상품 검색, 상품 등록 및 수정, 댓글(등록, 수정, 삭제), 상품 찜하기, 상품 이미지 검색, 상품 이미지 등록
                        상품 추천
                    </p>
                </div>
                <div>
                    <h2>상세 설명</h2>
                    <p>사용자들이 이미지 검색을 통해 주류 및 음료를 검색할 수 있습니다.<br />
                        다른 사용자들과 함께 상품에 대한 정보와 평가를 공유 할 수 있습니다.<br />
                        상품에 대한 평가를 기반으로 개인화된 상품 추천 기능을 제공합니다.</p>
                </div>
            </div>
        );
    }
}

export default Project;