endpoint = `https://api.quangbao.click`
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
            "name": "Tạo APIKEY Free"
        },
        {
            "url": endpoint + '/apikey?type=checker&apikey=${apikey}',
            "name": "Check APIKEY"
        }
        ]
    },
    {
        name: 'Facebook',
        icon: 'fa-brands fa-facebook',
        item: [{
            "url": endpoint + '/facebook/finduid?uid=4',
            "name": "Find UID"
        },
        {
            "url": endpoint + '/facebook/getinfo?uid=4',
            "name": "Get Info"
        },
        {
            "url": endpoint + '/fbdownload?url=https://fb.watch/kJJaY6wXwo/?mibextid=YCRy0i',
            "name": "Tải video từ Facebook"
        },
        {
            "url": endpoint + '/facebook/token?username=< uid >&password=< pass >&twofactor=< 2fa >&_2fa=0',
            "name": "Get token Facebook"
        }
        ]
    },
    {
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        item: [{
                "url": endpoint + "/tiktok/downloadvideo?url=https://vt.tiktok.com/ZSLRyjNuT/",
                "name": "TikTok Downloader"
            },
            {
                "url": endpoint + '/tiktok/downloadvideo?url=https://v.douyin.com/UD4asNJ/',
                "name": "Tiktok douyin"
            },   
            {
                "url": endpoint + "/tiktok/searchvideo?keywords=mixi",
                "name": "TikTok Search"
            },
            {
                "url": endpoint + "/tiktok/trendingtiktok",
                "name": "TikTok Trending"
            },   
            {
                "url": endpoint + "/tiktok/infov2?username=mixigaming",
                "name": "TikTok Info User"
            }   
        ]
    },
    {
        name: 'Instagram',
        icon: 'fab fa-twitter-square',
        item: [{
                "url": endpoint + "/instagram/infouser?ig=mixigaming",
                "name": "instagram info"
            },
            {
                "url": endpoint + "/instagram/downloadpost?url=https://www.instagram.com/reel/CsrDMiOLgpB/?utm_source=ig_web_copy_link&igshid=MmJiY2I4NDBkZg==",
                "name": "instagram dowload"
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
                "url": 'https://deobfuscate.quangbao.click',
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
                "name": "Ảnh Liên Quân"
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
                "url": endpoint + "/shopmaihuong?text1=test&text2=0258965JQK",
                "name": "Shop Mike Hường"
            },
            {
                "url": endpoint + "/anhbia?name=nguyen%20bao&age=2009",
                "name": "Ảnh bìa"
            },
            {
                "url": endpoint + "/bannertc?kieu=1&age=2009&name=nguyen%20bao",
                "name": "Ảnh bìa v2"
            },
            {
                "url": endpoint + "/bannertc2?age=2009&name=Bảo%20DeepTry&text=nguyenbao",
                "name": "Ảnh bìa v3"
            },
            {
                "url": endpoint + "/cardinfo?location=Quảng%20Trị&name=nguyenbao&gender=Nam&vanity=nguyenbao.03&uid=100012199992153&chuky=NguyenBao",
                "name": "Cardinfo"
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
                "url": endpoint + '/uptimerobot/create?url=https://JRTmain-2.ChuonCa.repl.co/&name=ChuonCa',
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
        name: 'Short Url',
        icon: 'fa-solid fa-curling-stone',
        item: [{
            "url": endpoint + '/slink?url=https://www.youtube.com/watch?v=Jk38OqdAQxc',
            "name": "Short Url"
        }]
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
            "url": endpoint + '/video/gaixinh',
            "name": "Gái xinh"
        },
            {
                "event": 'HOT',
                "url": endpoint + '/video/anime',
                "name": "Anime"
            },
               {
                "event": 'NSFW',
                "url": endpoint + '/video/sex',
                "name": "Sex 18+"
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
                "url": endpoint + '/images/siesta',
                "name": "Siesta"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/butter',
                "name": "Butter"
            },   
            {
                "event": 'NSFW',
                "url": endpoint + '/images/nudeok',
                "name": "Nude"
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
                "url": endpoint + '/images/penissucking',
                "name": "Penis Sucking"
            },   
            {
                "event": 'HOT',
                "url": endpoint + '/images/japanloli',
                "name": "Japan Loli"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/aqua',
                "name": "Aqua"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/chitanda',
                "name": "Chitanda"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/kana',
                "name": "Kana"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/kurumi',
                "name": "Kurumi"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/wall',
                "name": "Wallpaper HD"
            },
             {
                "event": 'HOT',
                "url": endpoint + '/images/wallpaper',
                "name": "Wallpaper 4k"
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
                "url": endpoint + '/images/sex',
                "name": "Sex"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/rem',
                "name": "Rem"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/sagiri',
                "name": "Sagiri"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/umaru',
                "name": "Umaru"
            },   
            {
                "event": 'HOT',
                "url": endpoint + '/images/anime',
                "name": "Anime"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/capdoi',
                "name": "Cặp đôi"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/cosplay',
                "name": "Cosplay"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/japan',
                "name": "Japan"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/gaixinhvn',
                "name": "Gái xinh"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/hana',
                "name": "Hana"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/instagram',
                "name": "Instagram"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/jack',
                "name": "Jack (J97)"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/jimmy',
                "name": "Jimmy"
            },
             {
                "event": 'HOT',
                "url": endpoint + '/images/tokyo',
                "name": "Tokyo Revengers"
            },
             {
                "event": 'HOT',
                "url": endpoint + '/images/khanhhuyen',
                "name": "Khánh Huyền"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/lnd',
                "name": "Linh Ngọc Đàm"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/gaiditbu',
                "name": "Gái mông bự"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/ngoctrinh',
                "name": "Ngọc Trinh"
            },
               {
                "event": 'HOT',
                "url": endpoint + '/images/trai',
                "name": "Trai"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/twitter',
                "name": "Twitter"
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
                "url": endpoint + '/game/dovui',
                "name": "Đố vui"
            },
            {
                "url": endpoint + '/game/dovuiv2',
                "name": "Đố vui 2"
            },
            {
                "url": endpoint + '/game/dhbc',
                "name": "Đuổi hình bắt chữ"
            },
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ 1"
            },
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ 2"
            },
            {
                "url": endpoint + '/game/dhbcemj',
                "name": "Đuổi hình bắt chữ Emoji"
            },
            {
                "url": endpoint + '/game/lienquanquiz',
                "name": "Đố vui Liên Quân"
            },
            {
                "url": endpoint + '/game/linkword?word=ngu ngốc',
                "name": "Nối từ"
            },
            {
                "url": endpoint + '/game/csgo_grenade',
                "name": "CSGO v1"
            },
            {
                "url": endpoint + '/game/csgo_heavy',
                "name": "CSGO v2"
            },
            {
                "url": endpoint + '/game/csgo_knift',
                "name": "CSGO v3"
            },
            {
                "url": endpoint + '/game/csgo_random',
                "name": "CSGO v4"
            },
            {
                "url": endpoint + '/game/taixiu',
                "name": "Tài xỉu"
            },
            {
                "url": endpoint + '/game/v2/taixiu',
                "name": "Tài xỉu 2"
            },
            {
                "url": endpoint + '/game/vuatiengviet',
                "name": "Vua tiếng Việt"
            },
            {
                "url": endpoint + '/vuatiengviet/image?word=ngu ngốc',
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
                "url": endpoint + '/imgur?link=https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg',
                "name": "Imgur Upload"
            },
            {
                "url": endpoint + '/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + '/covid?country=viet%20nam',
                "name": "COVID 19 DATA"
            }
        ]
    },
    {
        event: 'NEW!!!',
        name: 'Contact Admin',
        icon: 'fas fa-user-headset',
        item: [{
            event: 'DO NOT SPAM',
            url: 'https://www.facebook.com/nguyentyhanhmai.profile/',
            name: 'Facebook'
        },
        {
            url: 'https://zalo.me/0974052602',
            name: 'Zalo'
        },     
        {
            url: 'nguyenthanhmai.tk',
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
