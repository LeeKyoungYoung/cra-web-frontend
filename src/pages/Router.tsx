import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import IntroPage from './Intro/IntroPage';
import RecruitPage from './Recruit/RecruitPage';
import MainPage from './Main/MainPage';
import LoginPage from './Login/LoginPage';
import RegisterPage from './Register/RegisterPage';
import AcademicPage from './Board/Academic/AcademicPage';
import AcademicDetailPage from './Board/Academic/AcademicDetailPage';
import AcademicEditPage from './Board/Academic/AcademicEditPage';
import AcademicWritePage from './Board/Academic/AcademicWritePage';
import BookPage from './Board/Book/BookPage';
import BookDetailPage from './Board/Book/BookDetailPage';
import BookWritePage from './Board/Book/BookWritePage';
import BookEditPage from './Board/Book/BookEditPage';
import EquipmentPage from './Board/Equipment/EquipmentPage';
import EquipmentDetailPage from './Board/Equipment/EquipmentDetailPage';
import EquipmentEditPage from './Board/Equipment/EquipmentEditPage';
import EquipmentWritePage from './Board/Equipment/EquipmentWritePage';
import HavrutaPage from './Board/Havruta/HavrutaPage';
import HavrutaDetailPage from './Board/Havruta/HavrutaDetailPage';
import HavrutaEditPage from './Board/Havruta/HavrutaEditPage';
import HavrutaWritePage from './Board/Havruta/HavrutaWritePage';
import NoticePage from './Board/Notice/NoticePage';
import NoticeDetailPage from './Board/Notice/NoticeDetailPage';
import NoticeEditPage from './Board/Notice/NoticeEditPage';
import NoticeWritePage from './Board/Notice/NoticeWritePage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AdminPage from './Admin/AdminPage';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/intro" />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/recruit" element={<RecruitPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/academic" element={<AcademicPage />} />
        <Route path="/academic/detail" element={<AcademicDetailPage />} />
        <Route path="/academic/edit" element={<AcademicEditPage />} />
        <Route path="/academic/write" element={<AcademicWritePage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="/book/detail" element={<BookDetailPage />} />
        <Route path="/book/edit" element={<BookEditPage />} />
        <Route path="/book/write" element={<BookWritePage />} />
        <Route path="/equip" element={<EquipmentPage />} />
        <Route path="/equip/detail" element={<EquipmentDetailPage />} />
        <Route path="/equip/edit" element={<EquipmentEditPage />} />
        <Route path="/equip/write" element={<EquipmentWritePage />} />
        <Route path="/havruta" element={<HavrutaPage />} />
        <Route path="/havruta/detail" element={<HavrutaDetailPage />} />
        <Route path="/havruta/edit" element={<HavrutaEditPage />} />
        <Route path="/havruta/write" element={<HavrutaWritePage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/notice/detail" element={<NoticeDetailPage />} />
        <Route path="/notice/edit" element={<NoticeEditPage />} />
        <Route path="/notice/write" element={<NoticeWritePage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
