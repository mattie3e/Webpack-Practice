import React from 'react'
import ReactDOM from 'react-dom/client'

import { Provider } from "react-redux"
import store from './redux/reducer'

import { RecoilRoot } from 'recoil'

// 얘도 import 해줘야 함
import App from './App'


// window.onload 내용 적기
ReactDOM.createRoot(document.getElementById('root')).render(<RecoilRoot><App/></RecoilRoot>)