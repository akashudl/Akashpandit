import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import AuthenticationService from "../Services/AuthenticationService";

export const SidebarData = [
  {
    title: 'Home',
    path: '/Welcome/:dispalyname',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Chatbot',
    path: '/Chatbot',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Logs',
    path: '/logs',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  }
];