import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Intro from './Intro/Intro';
import Recruit from './Recruit/Recruit';
import Main from './Main/Main';
import Login from './Login/Login';
import Register from './Register/Register';
import AcademicList from './Board/Academic/AcademicList';
import AcademicDetail from './Board/Academic/AcademicDetail';
import AcademicEdit from './Board/Academic/AcademicEdit';
import AcademicWrite from './Board/Academic/AcademicWrite';
import BookList from './Board/Book/BookList';
import BookDetail from './Board/Book/BookDetail';
import BookWrite from './Board/Book/BookWrite';
import BookEdit from './Board/Book/BookEdit';
import EquipmentList from './Board/Equipment/EquipmentList';
import EquipmentDetail from './Board/Equipment/EquipmentDetail';
import EquipmentEdit from './Board/Equipment/EquipmentEdit';
import EquipmentWrite from './Board/Equipment/EquipmentWrite';
import HavrutaList from './Board/Havruta/HavrutaList';
import HavrutaDetail from './Board/Havruta/HavrutaDetail';
import HavrutaEdit from './Board/Havruta/HavrutaEdit';
import HavrutaWrite from './Board/Havruta/HavrutaWrite';
import NoticeList from './Board/Notice/NoticeList';
import NoticeDetail from './Board/Notice/NoticeDetail';
import NoticeEdit from './Board/Notice/NoticeEdit';
import NoticeWrite from './Board/Notice/NoticeWrite';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AdminPage from './Admin/AdminPage';

export default function AppRouter() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/intro" />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/recruit" element={<Recruit />} />
        <Route path="/main" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/academic" element={<AcademicList />} />
        <Route path="/academic-detail" element={<AcademicDetail />} />
        <Route path="/academic-edit" element={<AcademicEdit />} />
        <Route path="/academic-write" element={<AcademicWrite />} />
        <Route path="/book" element={<BookList />} />
        <Route path="/book-detail" element={<BookDetail />} />
        <Route path="/book-edit" element={<BookEdit />} />
        <Route path="/book-write" element={<BookWrite />} />
        <Route path="/equip" element={<EquipmentList />} />
        <Route path="/equip-detail" element={<EquipmentDetail />} />
        <Route path="/equip-edit" element={<EquipmentEdit />} />
        <Route path="/equip-write" element={<EquipmentWrite />} />
        <Route path="/havruta" element={<HavrutaList />} />
        <Route path="/havruta-detail" element={<HavrutaDetail />} />
        <Route path="/havruta-edit" element={<HavrutaEdit />} />
        <Route path="/havruta-write" element={<HavrutaWrite />} />
        <Route path="/notice" element={<NoticeList />} />
        <Route path="/notice-detail" element={<NoticeDetail />} />
        <Route path="/notice-edit" element={<NoticeEdit />} />
        <Route path="/notice-write" element={<NoticeWrite />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}
