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
            },
            {
                "url": endpoint + "/ggsaid?name=nguyenbao",
                "name": "m52"
            },
            {
                "url": endpoint + "/hn2022?&name=Nguyễn%20Quang%20Bảo&kieu=2&uid=100012199992153",
                "name": "lixi"
            },
            {
                "url": endpoint + "/mkt?text1=Nguyễn%20Quang%20Bảo&text2=Bảo%20Dz&fb=nguyenbao&ma=xxx@gmail.com&tl=113&lc=Quảng%20Trị&uid=100012199992153",
                "name": "Bìa mkt"
            },
            {
                "url": endpoint + "/moon?name=Nguyễn%20Quang%20Bảo&ngay=11&thang=11&nam=2011",
                "name": "moon"
            },
            {
                "url": endpoint + "/tad?color1=red&color2=blue&tenchinh=Nguyễn%20Quang%20Bảo&ten_phu=Bảo%2004",
                "name": "Logo"
            },
            {
                "url": endpoint + "/tichxanh?kieu=2&uid=100012199992153&name=NguyenBao",
                "name": "Tích xanh"
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
                "url": endpoint + '/uptimerobot/create?url= Dán url vào đây',
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
        name: 'Other',
        icon: 'fa-solid fa-curling-stone',
        item: [{
            "url": endpoint + '/poem/love',
            "name": "Thính tình yêu"
        },
               {
            "url": endpoint + '/poem/cadao',
            "name": "cadao"
        },
               {
            "url": endpoint + '/poem/truyencuoi',
            "name": "Truyện cười"
        },
               {
            "url": endpoint + '/poem/joker',
            "name": "joker"
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
                "event": 'HOT',
                "url": endpoint + '/images/videochill',
                "name": "Video chill"
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
                "url": endpoint + '/images/gura',
                "name": "Gura"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/kawaii',
                "name": "Kawaii"
            },   
            {
                "event": 'NSFW',
                "url": endpoint + '/images/couple',
                "name": "Couple"
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
                "url": endpoint + '/images/ppcouple',
                "name": "Ppcouple"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/gentle',
                "name": "Gentle"
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
                "url": endpoint + '/images/girlsexy',
                "name": "Girlsexy"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/help',
                "name": "Help"
            },
             {
                "event": 'HOT',
                "url": endpoint + '/images/hentai',
                "name": "Hentai"
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
                "event": 'HOT',
                "url": endpoint + '/images/itachi',
                "name": "Itachi"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/meme',
                "name": "Meme"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/wibu',
                "name": "Wibu"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/saumui',
                "name": "Saumui"
            },   
            {
                "event": 'HOT',
                "url": endpoint + '/images/anime',
                "name": "Anime"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/trai',
                "name": "Trai"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/cosplay',
                "name": "Cosplay"
            },
            {
                "event": 'HOT',
                "url": endpoint + '/images/tw',
                "name": "Tw"
            },
            {
                "event": 'NSFW',
                "url": endpoint + '/images/ig',
                "name": "Instagram"
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
                "url": endpoint + '/game/pubg',
                "name": "Pubg"
            },
            {
                "url": endpoint + '/game/dhbcv𝟯',
                "name": "Đuổi hình bắt chữ 3"
            },
            {
                "url": endpoint + '/game/dhbcv1',
                "name": "Đuổi hình bắt chữ 1"
            },
            {
                "url": endpoint + '/game/dhbcv2',
                "name": "Đuổi hình bắt chữ 2"
            },
            {
                "url": endpoint + '/game/csgo',
                "name": "Csgo"
            },
            {
                "url": endpoint + '/game/linkword?word=ngu ngốc',
                "name": "Nối từ"
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
            },
            {
                "url": endpoint + '/covid?country=viet nam',
                "name": "Covid"
            },
            {
                "url": endpoint + '/tarot',
                "name": "Tarot"
            },
            {
                "url": endpoint + '/wattpad/search?q=[name]',
                "name": "Wattpad"
            }
        ]
    },
    {
        name: 'Tiện ích',
        icon: 'fa-solid fa-lamp-street',
        item: [{
                "url": endpoint + '/imgur?link=https://i.postimg.cc/tTBpCK1t/181261765-187217643134575-3841721186713397745-n.jpg',
                "name": "Imgur Upload"
            },
            {
                "url": endpoint + '/random/useragent',
                "name": "Random User-Agent"
            },
            {
                "url": endpoint + 'checknude?key=(key)&link=',
                "name": "Check nude"
            },
            {
                "url": endpoint + '/img/wallpaper?q=pokemon',
                "name": "Wallpaper"
            },
            {
                "url": endpoint + '/img/wallpaperv2?q=raiden&page=1',
                "name": "Wallpaperv2"
            },
            {
                "url": endpoint + '/tinyurl?url=https://i.postimg.cc/8zWWcwrv/6b16688a077fdc21856e26.jpg',
                "name": "Tinyurl"
            },
            {
                "url": endpoint + '/xsmb',
                "name": "Xsmb"
            },
            {
                "url": endpoint + '/xsmb?date=28/05/2023',
                "name": "Xsmb theo ngày"
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
