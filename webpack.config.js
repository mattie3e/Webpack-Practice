// 플러그인 import 필요!
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const config = {
    // 모드 설정 (production)
    "mode": "development",
    
    // 시작파일 지정
    "entry": {
        "app": ["./src/index.js"]
    },

    // 번들링된 파일 이름, 위치
    "output": {
        "filename": "webpack.js",
        "path": __dirname + "/public" // 절대경로 - 항상 프로젝트 디렉토리 내부라는 보장이 없어서
    },

    // 전처리기 등록
    "module": {
        "rules": [
            {
                "test": /\.js$/,
                "loader": "babel-loader"
            },
            {
                "test": /\.(png|jpe?g|gif|svg|webp)$/,
                "use": ['file-loader']
            }
        ]
    },

    // 플러그인
    "plugins": [
        new HtmlWebpackPlugin({
            "template": __dirname + "/public/index.html"
        }),
        new CleanWebpackPlugin()
    ],

    // 개발 서버 설정
    "devServer": {
        "static": {
            "directory": __dirname + "/public"
        },
        "port": 3000
    }
}


module.exports = config