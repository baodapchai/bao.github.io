endpoint = `https://docs-api.jrtxtracy.repl.co`
message_list = [{
    icon: 'fa-solid fa-star-exclamation',
    title: 'Trang web bắt đầu hoạt động',
    timing: '1655701877368'
}];

item_list = [
    {
        event: 'HOT',
        name: 'APIKEY',
        icon: 'fa-solid fa-pen-alt',
        item: [{
            "url": endpoint + '/apikey?type=register&name=${name}',
            "name": "Get APIKEY Free"
        },
        {
            "url": endpoint + '/apikey?type=checker&apikey=${apikey}',
            "name": "Check APIKEY"
        },
        {
            "url": 'https://bit.ly/JRTxTracy',
            "name": "Hướng dẫn tạo API_KEY"
        },
        {
            "url": 'https://i.imgur.com/odcEJWo.png',
            "name": "Mã QR tạo API_KEY"
        }
        ]
    },
    {
        event: 'HOT',
        name: 'Download Video Social',
        icon: 'fa fa-cloud-download',
        item: [{
            "url": 'https://nguyenmanh.name.vn/facebook',
            "name": "Download Video Facebook"
        },
        {
            "url": 'https://nguyenmanh.name.vn/tiktok',
            "name": "Download Video Tiktok"
        },
        {
            "url": 'https://nguyenmanh.name.vn/youtube',
            "name": "Download Video Youtube"
        },
        {
            "url": 'https://nguyenmanh.name.vn/douyin',
            "name": "Download Video Tiktok Douyin"
        },
        {
            "url": 'https://nguyenmanh.name.vn/videodl',
            "name": "Download All Video No Logo"
        }       
        ]
    },
    {
        event: 'HOT',
        name: 'Facebook',
        icon: 'fa-brands fa-facebook',
        item: [{
            "url": endpoint + '/facebook/finduid?url=https://www.facebook.com/NHD.JRT.262/',
            "name": "Find UID"
        },
        {
            "url": endpoint + '/facebook/info?uid=100033478361032',
            "name": "Get Info"
        },
        {
            "url": endpoint + '/facebook/video?url=https://www.facebook.com/watch?v=587760489446657',
            "name": "Tải video từ Facebook"
        },
        {
            "url": 'https://getid.maihoang04.repl.co/',
            "name": "Lấy UID Facebook"
        }       
        ]
    },
    {
        event: 'HOT',
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        item: [{
                "url": endpoint + "/tiktok?url=https://www.tiktok.com/@hd.jrt03/video/7127548660589645083?lang=vi-VN",
                "name": "TikTok Downloader"
            },
            {
                "url": endpoint + '/tiktok/download?link=https://www.tiktok.com/@hd.jrt03/video/7127548660589645083?lang=vi-VN',
                "name": "Tiktok Downloader 2"
            },   
            {
                "url": endpoint + "/tiktok?search=hd.jrt03",
                "name": "TikTok Search"
            },
            {
                "url": endpoint + "/tiktok/trending",
                "name": "TikTok Trending"
            },   
            {
                "url": endpoint + "/tiktok?username=hd.jrt03",
                "name": "TikTok Info User"
            },
            {
                "url": endpoint + '/tiktok/info?username=hd.jrt03',
                "name": "Tiktok Info User 2"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'Twitter',
        icon: 'fab fa-twitter-square',
        item: [{
                "url": endpoint + "/twitter/video?url=https://twitter.com/b_dm12/status/1607003962292711424?s=20&t=CXAPUq93Y7DsHR2ViHXK5w",
                "name": "Twitter Downloader"
            }
        ]
    },
    {
        name: 'Tạo avatar anime',
        icon: 'fa-solid fa-user-tie',
        item: [{
                "url": endpoint + "/taoanhdep/list",
                "name": "Danh sách nhân vật"
            },
            {
                "url": endpoint + "/taoanhdep/search?key=Pika",
                "name": "Tìm kiếm nhân vật theo tên"
            },
            {
                "url": endpoint + "/taoanhdep/data",
                "name": "Dữ liệu avatar anime"
            },   
            {
                "url": endpoint + "/canvas/avatarwibu?id=2&chu_nen=quangbao&chu_ky=nguyenbao",
                "name": "Tạo avatar"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Code',
        icon: 'fa-solid fa-code',
        item: [{
                "url": 'https://deobfuscate.api.quangbao.click',
                "name": "Deobfuscate"
            },
            {
                "url": 'https://obfuscator.io/',
                "name": "Obfuscate"
            }
        ]
    },
    {
        name: 'Canvas',
        icon: 'fa-solid fa-diagram-lean-canvas',
        item: [{
                "url": endpoint + "/blink?id=4,1540670681&delay=500",
                "name": "Blink"
            },
            {
                "url": endpoint + "/fbcover/v1?name=Nguyen%20Bảo&uid=100012199992153&address=Quảng%20Trị&email=113@gmail.com&subname=nguyenbao&sdt=113&color=pink",
                "name": "Facebook Cover v1"
            },
            {
                "url": endpoint + "/fbcover/v2?name=Quangbao&id=1&subname=nguyenbao",
                "name": "Facebook Cover v2"
            },
            {
                "url": endpoint + "/fbcover/v3?name=Nguyễn%20Quang%20Bảo&birthday=14/07&love=Bảo%20Dz&location=Quảng%20Trị&hometown=Quảng%20Trị&follow=9999999999&gender=Nữ&uid=100012199992153",
                "name": "Facebook Cover v3"
            },
            {
                "url": endpoint + "/lienquan?id=45&word=quangbao",
                "name": "Liên quân"
            },
            {
                "url": endpoint + "/cccd?text1=bao&text2=bao&text3=dz&text4=fuho&urlimg=https://i.imgur.com/p9wciqt.jpg",
                "name": "Fake CCCD"
            },   
            {
                "url": endpoint + "/thuphap?id=1&sodong=3&dong_1=Nguyễn&dong_2=Minh&dong_3=Bảo",
                "name": "Chữ Thư Pháp"
            },
            {
                "url": endpoint + "/giangsinh?text=nguyenbao",
                "name": "Giáng Sinh"
            },
            {
                "url": endpoint + "/shopmaihuong?text1=quangbao&text2=0258965JQK",
                "name": "Shop Mike Hường"
            },
            {
                "url": endpoint + "/anhbia?name=nguyen%20bao&age=2009",
                "name": "Ảnh bìa"
            },
            {
                "url": endpoint + "/bannertc?kieu=1&age=2009&name=nguyen%20bao",
                "name": "Ảnh bìa chữ ký"
            },
            {
                "url": endpoint + "/bannertc2?age=2009&name=Bảo%20DeepTry&text=nguyenbao",
                "name": "Ảnh bìa chữ ký v2"
            },
            {
                "url": endpoint + "/cardinfo?location=Quảng%20Trị&name=nguyenbao&gender=Nam&vanity=nguyenbao.03&uid=100012199992153&chuky=NguyenBao",
                "name": "cardinfo"
            },
            {
                "url": endpoint + "/ggsaid?name=nguyenbao",
                "name": "GG said"
            },
            {
                "url": endpoint + "/hn2022?&name=Nguyễn%20Quang%20Bảo&kieu=2&uid=100012199992153",
                "name": "lixi"
            },
            {
                "url": endpoint + "/m2022?&name=Nguyễn%20Quang%20Bảo&uid=100012199992153",
                "name": "bìa tết"
            },
            {
                "url": endpoint + "/mkt?text1=Nguyễn%20Quang%20Bảo&text2=Bảo%20Dz&fb=nguyenbao&ma=xxx@gmail.com&tl=113&lc=Quảng%20Trị&uid=100012199992153",
                "name": "bìa mkt"
            },
            {
                "url": endpoint + "/tad?color1=red&color2=blue&tenchinh=Nguyễn%20Quang%20Bảo&ten_phu=Bảo%2004",
                "name": "bìa logo"
            },
            {
                "url": endpoint + "/tichxanh?kieu=2&uid=100012199992153&name=NguyenBao",
                "name": "tích xanh"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Confession',
        icon: 'fa-solid fa-sync fa-spin',
        item: [{
                "url": endpoint + '/cfs',
                "name": "CFS"
            },
            {
                "url": endpoint + '/cfsdata',
                "name": "Data CFS"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Uptime Robot',
        icon: 'fa-solid fa-robot-astromech',
        item: [{
                "url": endpoint + '/uptimerobot/create?url=https://api.quangbao.click',
                "name": "Uptime Create"
            }
        ]
    },
    {
        name: 'SoundCloud',
        icon: 'fa-brands fa-soundcloud',
        item: [{
                "url": endpoint + '/soundcloud?search=son tung',
                "name": "SoundCloud Search"
            },
            {
                "url": endpoint + '/soundcloud?url=https://soundcloud.com/sontungmtp-music/ch-ng-ta-c-a-hi-n-t-i',
                "name": "SoundCloud Downloader"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Email',
        icon: 'fa-solid fa-envelope',
        item: [{
                "url": endpoint + '/mail10p/domain',
                "name": "List Domain"
            },
            {
                "url": endpoint + '/mail10p/get?email=emall@domain&apikey=',
                "name": "Get Email"
            },
            {
                "url": endpoint + '/mail10p/check?id_mail=id_mail&apikey=',
                "name": "Check Email"
            }   
        ]
    },
    {
        name: 'Youtube',
        icon: 'fa-brands fa-youtube',
        item: [{
                "url": endpoint + '/youtube?search=son tung',
                "name": "Youtube Search"
            },
            {
                "url": endpoint + '/youtube?GetVideoId=https://www.youtube.com/watch?v=Jk38OqdAQxc',
                "name": "Get Video Id"
            },
            {
                "url": endpoint + '/youtube?GetVideoDetails=xypzmu5mMPY',
                "name": "Get Video Details"
            },
            {
                "url": endpoint + '/youtube?downloadVideo=Jk38OqdAQxc',
                "name": "Youtube Downloader"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Comic',
        icon: 'fa-solid fa-book-blank',
        item: [{
                "url": endpoint + '/hentaiz/list',
                "name": "Danh sách truyện Hentaiz"
            },
            {
                "url": endpoint + '/hentaiz/read?id=12&chapter=1',
                "name": "Đọc truyện hentaiz"
            },
            {
                "url": endpoint + '/hentaiz/contribute?link=http://nhattruyenmoi.com/truyen-tranh/bong-nhien-toi-tro-thanh-qua-den-63515&name=1',
                "name": "Đóng góp truyện Hentaiz"
            },
            {
                "url": endpoint + '/hentaiz/data',
                "name": "Dữ liệu truyện hentaiz"
            },
            {
                "url": endpoint + '/hentaiz/data1',
                "name": "Dữ liệu đóng góp truyện hentaiz"
            }    
        ]
    },
    {
        event: 'HOT',
        name: 'Bank',
        icon: 'fas fa-university',
        item: [{
                "url": endpoint + '/bank/check?ID={id}',
                "name": "Check Balance"
            },
            {
                "url": endpoint + '/bank/find?type={type}',
                "name": "Find ID"
            },
            {
                "url": endpoint + '/bank/get?ID=${id}&money=${money}&password=${body}',
                "name": "Perform"
            },
            {
                "url": endpoint + '/bank/password?bka=${type}&dka=${senderID}',
                "name": "Password"
            },
            {
                "event": 'Pay STK',
                "url": endpoint + '/bank/pay?type=STK&senderID=${id}&STK=${STK}&money=${money}&password=${password}',
                "name": "Pay Account"
            },
            {
                "event": 'Pay ID',
                "url": endpoint + '/bank/pay?type=ID&senderID=${id}&userID=${ID}&money=${money}&password=${password}',
                "name": "Pay ID"
            },   
            {
                "url": endpoint + '/bank/register?senderID=${id}&name=${name}',
                "name": "Register Account"
            },
            {
                "url": endpoint + '/bank/send?senderID=${senderID}&money=${money}',
                "name": "Send"
            },
            {
                "url": endpoint + '/bank/top',
                "name": "Top Account"
            }   
        ]
    },
    {
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": endpoint + '/pinterest?search=mirai',
            "name": "Search"
        }]
    },
    {
        event:'HOT',
        name: 'Random Videos',
        icon: 'fas fa-video',
        item: [{
            "event": 'HOT',
            "url": endpoint + '/images/videogaixinh',
            "name": "Gái xinh"
        },
            {
                "event": 'HOT',
                "url": endpoint + '/images/animevd',
                "name": "Anime"
            },
               {
                "event": 'NSFW',
                "url": endpoint + '/images/videosex',
                "name": "Sex 18+"
            },
               {
                "event": 'NSFW',
                "url": endpoint + '/images/videochill',
                "name": "video chill"
            },
               {
                "event": 'NSFW',
                "url": endpoint + '/images/autosend',
                "name": "autosend"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "event": 'NSFW',
                "url": endpoint + '/images/ausand',
                "name": "Ausand"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/du',
                "name": "Ngực"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/anime',
                "name": "Anime"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/chitanda',
                "name": "Chitanda"
            },   
            {
                "event": 'NSFW',
                "url": endpoint + '/images/kawaii',
                "name": "kawaii"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/girl',
                "name": "Girl"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/mong',
                "name": "Mông"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/gura',
                "name": "gura"
            },   
            {
                "event": 'HOT',
                "url": endpoint + '/images/couple',
                "name": "couple"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/ppcouple',
                "name": "ppcouple"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/gentle',
                "name": "gentle"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/kana',
                "name": "Kana"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/girlsexy',
                "name": "girlsexy"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/hentai',
                "name": "hentai"
            },
             {
                "event": 'HOT',
                "url": endpoint + '/images/itachi',
                "name": "itachi"
            },  
            {
                "event": 'HOT',
                "url": endpoint + '/images/loli',
                "name": "Anime Loli"
            },  
            {
                "event": 'HOT',
                "url": endpoint + '/images/lucy',
                "name": "Lucy"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/Mirai',
                "name": "Mirai"
            },  
            {
                "event": 'NSFW',
                "url": endpoint + '/images/Naughty',
                "name": "Naughty"
            },
            {
                "event": 'NSFW 18+',
                "url": endpoint + '/images/meme',
                "name": "meme"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/wibu',
                "name": "wibu"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/saumui',
                "name": "saumui"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/trai',
                "name": "trai"
            },   
            {
                "event": 'HOT',
                "url": endpoint + '/images/anime',
                "name": "Anime"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/tw',
                "name": "tw"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/cosplay',
                "name": "Cosplay"
            },
               {
                "event": 'HOT',
                "url": endpoint + '/images/trai',
                "name": "Trai"
            }
        ]
    },
    {
        name: 'Simsimi',
        icon: 'fa-solid fa-message-bot',
        item: [{
                "url": endpoint + '/sim?type=ask&ask=sim ơi',
                "name": "Ask"
            },
            {
                "url": endpoint + '/sim?type=teach&ask=sim ơi&ans=ơii',
                "name": "Teach"
            }
        ]
    },
    {
        name: 'Games',
        icon: 'fa-solid fa-gamepad',
        item: [{
                "url": endpoint + '/game/pubg',
                "name": "PUBG"
            },
            {
                "url": endpoint + '/game/dovuiv2',
                "name": "Đố vui 2"
            },
            {
                "url": endpoint + '/game/dovuilq',
                "name": "Đố vui LQ"
            },
            {
                "url": endpoint + '/game/dhbcv𝟯',
                "name": "Đuổi hình bắt chữ"
            },
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ 1"
            },
            {
                "url": endpoint + '/game/linkword?word=ngu ngốc',
                "name": "Nối từ"
            },
            {
                "url": endpoint + '/game/csgo',
                "name": "CSGO"
            },
            {
                "url": endpoint + '/game/taixiu',
                "name": "Tài xỉu"
            },
            {
                "url": endpoint + '/game/taixiuv2',
                "name": "Tài xỉu 2"
            },
            {
                "url": endpoint + '/game/vuatiengviet',
                "name": "Vua tiếng Việt"
            },
            {
                "url": endpoint + '/game/vuatiengviet/image?word=ngu ngốc',
                "name": "Vua tiếng Việt 2"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Data',
        icon: 'fa-solid fa-scroll fa-flip',
        item: [{
                "url": endpoint + '/lol/list',
                "name": "List Hero LOL"
            },
            {
                "url": endpoint + '/lol?champion=yasuo',
                "name": "Info Hero LOL"
            },
            {
                "url": endpoint + '/pokemon/search?name=Pikachu',
                "name": "Search Pokemon"
            }   
        ]
    },
    {
        name: 'Tiện ích',
        icon: 'fa-solid fa-lamp-street',
        item: [{
                "url": endpoint + '/tarot',
                "name": "Tarot"
            },
            {
                "url": endpoint + '/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + '/covid?country=viet%20nam',
                "name": "COVID 19 DATA"
            },
            {
                "url": endpoint + '/wattpad/search?q=conan',
                "name": "wattpad"
            },
            {
                "url": endpoint + '/imgur?link= link ảnh',
                "name": "Imgur"
            },
            {
                "url": endpoint + 'checknude?key=(key)&link=',
                "name": "check nude"
            },
            {
                "url": endpoint + '/img/wallpaper?q=pokemon',
                "name": "wallpaper"
            }
            {
                "url": endpoint + '/img/wallpaperv2?q=raiden&page=1',
                "name": "wallpaper2"
            },
            {
                "url": endpoint + '/tinyurl?url=https://cdn.bhdw.net/im/raiden-shogun-raiden-ei-genshin-impact-anime-video-game-wallpaper-79021_w635.webp',
                "name": "link tinyurl"
            },
            {
                "url": endpoint + '/xsmb',
                "name": "xsmb"
            }
        ]
    },
    {
        event: 'NEW!!!',
        name: 'Contact Admin',
        icon: 'fas fa-user-headset',
        item: [{
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/quangbao04',
            name: 'Facebook'
        },
        {
            url: 'https://zalo.me/0702374886',
            name: 'Zalo'
        },     
        {
            url: 'quangbao.dev',
            name: 'My Profile'
        },
        {
            url: 'https://me.momo.vn/qr-page/P2P/donatetome',
            name: 'Donate Momo'
        },
        {
            url: 'https://imgur.com/NXX9Lnh',
            name: 'Donate Mbbank (ATM)'
        } 
      ]
    }
];
