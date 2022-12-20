import { atom } from 'recoil'

export const isOpenState = atom({
    key: 'isOpen',
    default: true
})

export const selectNavState = atom({
    key: 'select',
    default: '홈'
})

export const contentData = atom({
    key: 'contents',
    default: [
        {"title":"역시...곤란한가요? 고양이에게 『삐약』소리를 들으면?", "channel_name":"미야옹철의 냥냥펀치", "channel_img":"https://yt3.ggpht.com/Vo0XVzwybhkBZxDl23mINuZmYna7bs37GhKbwxFP-7zCNbDTgSQxQ84UQikP7qP4v9eCADteulc=s68-c-k-c0x00ffffff-no-rj", "duration":"13:33", "view_rate":"22만회", "date_info":"10개월 전", "thumbnail_img":"https://i.ytimg.com/vi/scycspFJw58/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDkPIgKag5cFVKuaD_2zIzGatHbYQ", "check_icon":true},
        {"title":"이자 5%? 사상 최대 돈이 몰린 은행 예금", "channel_name":"슈카월드", "channel_img":"https://yt3.ggpht.com/ytc/AKedOLQaiBQGZkfMmM4XqsvWYRZUjUOk1cqZ_13vWIPe=s68-c-k-c0x00ffffff-no-rj", "duration":"31:05", "view_rate":"81만회", "date_info":"6일 전", "thumbnail_img":"https://i.ytimg.com/vi/oO32HQhJbuU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy7oABdnMxNz2t7_7bj1ePewEJaA", "check_icon":false},
        {"title":"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 미술관에서 들려오는 고급진 조성진의 클래식", "channel_name":"때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ", "channel_img":"https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj", "duration":"1:11:37", "view_rate":"143만회", "date_info":"8개월 전", "thumbnail_img":"https://i.ytimg.com/vi/WGwP4-zYH5M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBox2J7VytOzS-wbYtOlIz2Xd3NSA", "check_icon":true},
        {"title":"sub)이러면 바로 손절각👋 고양이가 싫어하는 유형 3가지", "channel_name":"미야옹철의 냥냥펀치", "channel_img":"https://yt3.ggpht.com/Vo0XVzwybhkBZxDl23mINuZmYna7bs37GhKbwxFP-7zCNbDTgSQxQ84UQikP7qP4v9eCADteulc=s68-c-k-c0x00ffffff-no-rj", "duration":"9:28", "view_rate":"116만회", "date_info":"1년 전", "thumbnail_img":"https://i.ytimg.com/vi/z467kOZhNKI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1HRtu43MTHqgTQ2bD82FZAitBQQ", "check_icon":true},
        {"title":"[최초공개] LE SSERAFIM(르세라핌) - ANTIFRAGILE (4K) | LE SSERAFIM COMEBACKSHOW | Mnet 221017 방송", "channel_name":"M2", "channel_img":"https://yt3.ggpht.com/ytc/AMLnZu-9OiE_xfvFOhAqnaTFvN0kdVUfmy4LlEu3guirWQ=s176-c-k-c0x00ffffff-no-rj-mo", "duration":"3:40", "view_rate":"721만회", "date_info":"7일 전", "thumbnail_img":"https://i.ytimg.com/vi/p_XdZdg9oGc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzcoY-XGIX_MCuvqR0Qfo8D1KMRw", "check_icon":true},
        {"title":"뉴욕에 여행을 간다면", "channel_name":"침착맨", "channel_img":"https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s68-c-k-c0x00ffffff-no-rj", "duration":"37:16", "view_rate":"58만회", "date_info":"3일 전", "thumbnail_img":"https://i.ytimg.com/vi/oiFMy3eW9qE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_3Fjf7NSViZDv81nfvOYWgZbedQ", "check_icon":true}, 
        {"title":"역시...곤란한가요? 고양이에게 『삐약』소리를 들으면?", "channel_name":"미야옹철의 냥냥펀치", "channel_img":"https://yt3.ggpht.com/Vo0XVzwybhkBZxDl23mINuZmYna7bs37GhKbwxFP-7zCNbDTgSQxQ84UQikP7qP4v9eCADteulc=s68-c-k-c0x00ffffff-no-rj", "duration":"13:33", "view_rate":"22만회", "date_info":"10개월 전", "thumbnail_img":"https://i.ytimg.com/vi/scycspFJw58/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLDkPIgKag5cFVKuaD_2zIzGatHbYQ", "check_icon":true},
        {"title":"이자 5%? 사상 최대 돈이 몰린 은행 예금", "channel_name":"슈카월드", "channel_img":"https://yt3.ggpht.com/ytc/AKedOLQaiBQGZkfMmM4XqsvWYRZUjUOk1cqZ_13vWIPe=s68-c-k-c0x00ffffff-no-rj", "duration":"31:05", "view_rate":"81만회", "date_info":"6일 전", "thumbnail_img":"https://i.ytimg.com/vi/oO32HQhJbuU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBy7oABdnMxNz2t7_7bj1ePewEJaA", "check_icon":false},
        {"title":"𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 미술관에서 들려오는 고급진 조성진의 클래식", "channel_name":"때껄룩ᴛᴀᴋᴇ ᴀ ʟᴏᴏᴋ", "channel_img":"https://yt3.ggpht.com/aW-CCbaQ2rbDrEvmpjf630Xhh4wiXEAYs_vZuhX7t3T7tqohQGYl1YzpWNORdJwPin6SMtstyw=s68-c-k-c0x00ffffff-no-rj", "duration":"1:11:37", "view_rate":"143만회", "date_info":"8개월 전", "thumbnail_img":"https://i.ytimg.com/vi/WGwP4-zYH5M/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBox2J7VytOzS-wbYtOlIz2Xd3NSA", "check_icon":true},
        {"title":"sub)이러면 바로 손절각👋 고양이가 싫어하는 유형 3가지", "channel_name":"미야옹철의 냥냥펀치", "channel_img":"https://yt3.ggpht.com/Vo0XVzwybhkBZxDl23mINuZmYna7bs37GhKbwxFP-7zCNbDTgSQxQ84UQikP7qP4v9eCADteulc=s68-c-k-c0x00ffffff-no-rj", "duration":"9:28", "view_rate":"116만회", "date_info":"1년 전", "thumbnail_img":"https://i.ytimg.com/vi/z467kOZhNKI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB1HRtu43MTHqgTQ2bD82FZAitBQQ", "check_icon":true},
        {"title":"[최초공개] LE SSERAFIM(르세라핌) - ANTIFRAGILE (4K) | LE SSERAFIM COMEBACKSHOW | Mnet 221017 방송", "channel_name":"M2", "channel_img":"https://yt3.ggpht.com/ytc/AMLnZu-9OiE_xfvFOhAqnaTFvN0kdVUfmy4LlEu3guirWQ=s176-c-k-c0x00ffffff-no-rj-mo", "duration":"3:40", "view_rate":"721만회", "date_info":"7일 전", "thumbnail_img":"https://i.ytimg.com/vi/p_XdZdg9oGc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzcoY-XGIX_MCuvqR0Qfo8D1KMRw", "check_icon":true},
        {"title":"뉴욕에 여행을 간다면", "channel_name":"침착맨", "channel_img":"https://yt3.ggpht.com/ytc/AKedOLTi6w4E6985-QdVBbovBSsnCeTETyj0WomjM5IY8Q=s68-c-k-c0x00ffffff-no-rj", "duration":"37:16", "view_rate":"58만회", "date_info":"3일 전", "thumbnail_img":"https://i.ytimg.com/vi/oiFMy3eW9qE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB_3Fjf7NSViZDv81nfvOYWgZbedQ", "check_icon":true}
        ]
})

export const subscriptionData = atom({
    key: 'subscription',
    default: [
        {'src':'https://yt3.ggpht.com/fx8GiOIS24VM3vofD3hUHxeB0LvMIesyryhjQreN6v9uy6nuHhFLEnccNWdx9GbhUArrdEzKxb0=s176-c-k-c0x00ffffff-no-rj', 'name':'EO 이오'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu-OoCj8oG4hssfpUAvZ5EPCjBu21krVcB6tkVFsQA=s88-c-k-c0x00ffffff-no-rj', 'name':'침착맨'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu_KptPhlZ024JCVEU_eptEnciU89Hp_MNcGL2Vl=s88-c-k-c0x00ffffff-no-rj', 'name':'슈카월드'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu-FPJv66wbPdjQASHYZEprUYQOGgulX_HvVyj5c=s88-c-k-c0x00ffffff-no-rj', 'name':'안될과학 Unrealscience'},
        {'src':'https://yt3.ggpht.com/ytc/AMLnZu_3bGiwzX9iSbGaxKK8RnsKCezV4UFC365SLLLcSw=s88-c-k-c0x00ffffff-no-rj', 'name':'Wolf'}
    ]
})