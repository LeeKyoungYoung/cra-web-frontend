import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BoardList from '../../../components/Board/List/BoardList';
import { CATEGORY } from '../../../constants/category';
import './EquipmentPage.css';

// 비품의 상태를 정의하는 타입
interface Equipment {
  equipmentName: string;
  category: string;
  status: '대여가능' | '대여중';
  description: string; // 비품 설명 추가
}

export default function EquipmentPage() {
  const [availableEquipment, setAvailableEquipment] = useState<Equipment[]>([
    {
      equipmentName: '프로젝터',
      category: '전자제품',
      status: '대여가능',
      description: '회의 및 발표용 프로젝터',
    },
    {
      equipmentName: '노트북',
      category: '전자제품',
      status: '대여가능',
      description: '휴대용 노트북',
    },
    {
      equipmentName: '스크린',
      category: '전자제품',
      status: '대여가능',
      description: '프레젠테이션용 스크린',
    },
    {
      equipmentName: '캠코더',
      category: '촬영장비',
      status: '대여가능',
      description: '고화질 촬영을 위한 캠코더',
    },
  ]);
  const [rentedEquipment, setRentedEquipment] = useState<Equipment[]>([]);
  const [selectedEquipment, setSelectedEquipment] = useState<Equipment | null>(
    null,
  ); // 선택된 비품 정보 상태

  // 비품 대여 함수
  const handleRentEquipment = (equipment: Equipment) => {
    if (equipment.status === '대여가능') {
      setAvailableEquipment(availableEquipment.filter((e) => e !== equipment));
      setRentedEquipment([
        ...rentedEquipment,
        { ...equipment, status: '대여중' },
      ]);
    }
  };

  // 비품 반납 함수
  const handleReturnEquipment = (equipment: Equipment) => {
    if (equipment.status === '대여중') {
      setRentedEquipment(rentedEquipment.filter((e) => e !== equipment));
      setAvailableEquipment([
        ...availableEquipment,
        { ...equipment, status: '대여가능' },
      ]);
    }
  };

  // 비품 정보 보기 함수
  const handleEquipmentClick = (equipment: Equipment) => {
    setSelectedEquipment(equipment); // 비품 정보 상태 설정
  };

  return (
    <div className="container">
      <header>
        <h1>비품 대여 시스템</h1>
      </header>

      <section className="equipment-list">
        <h2>대여 가능한 비품 목록</h2>
        <table id="availableEquipment">
          <thead>
            <tr>
              <th>비품 이름</th>
              <th>카테고리</th>
              <th>상태</th>
              <th>대여하기</th>
            </tr>
          </thead>
          <tbody>
            {availableEquipment.map((equipment, index) => (
              <tr key={index}>
                <td>
                  <button onClick={() => handleEquipmentClick(equipment)}>
                    {equipment.equipmentName}
                  </button>
                </td>
                <td>{equipment.category}</td>
                <td>{equipment.status}</td>
                <td>
                  <button
                    onClick={() => handleRentEquipment(equipment)}
                    disabled={equipment.status !== '대여가능'}
                  >
                    대여하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>대여 중인 비품 목록</h2>
        <table id="rentedEquipment">
          <thead>
            <tr>
              <th>비품 이름</th>
              <th>카테고리</th>
              <th>상태</th>
              <th>반납하기</th>
            </tr>
          </thead>
          <tbody>
            {rentedEquipment.map((equipment, index) => (
              <tr key={index}>
                <td>{equipment.equipmentName}</td>
                <td>{equipment.category}</td>
                <td>{equipment.status}</td>
                <td>
                  <button
                    onClick={() => handleReturnEquipment(equipment)}
                    disabled={equipment.status !== '대여중'}
                  >
                    반납하기
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 비품 정보 모달 */}
      {selectedEquipment && (
        <div className="equipment-details">
          <h2>비품 상세 정보</h2>
          <p>
            <strong>비품명:</strong> {selectedEquipment.equipmentName}
          </p>
          <p>
            <strong>카테고리:</strong> {selectedEquipment.category}
          </p>
          <p>
            <strong>상태:</strong> {selectedEquipment.status}
          </p>
          <p>
            <strong>설명:</strong> {selectedEquipment.description}
          </p>
          <button onClick={() => setSelectedEquipment(null)}>닫기</button>
        </div>
      )}

      {/* BoardList 컴포넌트 추가 */}
      <BoardList category={CATEGORY.EQUIPMENT} />
    </div>
  );
}
