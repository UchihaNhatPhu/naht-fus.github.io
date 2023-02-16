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
        }
        ]
    },
    {
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
        name: 'TikTok',
        icon: 'fa-brands fa-tiktok',
        item: [{
                "url": endpoint + "/tiktok?url=https://vm.tiktok.com/https://vt.tiktok.com/ZS8jhVtr3/",
                "name": "TikTok Downloader"
            },
            {
                "url": endpoint + '/tiktok/download?link=https://vt.tiktok.com/ZS8jhVtr3/',
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
                "url": endpoint + "/taoanhdep/search?type=name&name=nobita",
                "name": "Tìm kiếm nhân vật theo tên"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=id&id=30",
                "name": "Tìm kiếm nhân vật theo ID"
            },
            {
                "url": endpoint + "/taoanhdep/search?type=movie&movie=Conan",
                "name": "Tìm kiếm nhân vật theo tên phim"
            },
            {
                "url": endpoint + "/taoanhdep/data",
                "name": "Dữ liệu avatar anime"
            },   
            {
                "url": endpoint + "/taoanhdep/avatarwibu?id=1&chu_nen=Nguyễn Hải Đăng&chu_ky=J-JRT",
                "name": "Tạo avatar"
            }
        ]
    },
    {
        event: 'HOT',
        name: 'Code',
        icon: 'fa-solid fa-code',
        item: [{
                "url": 'https://deobfuscate.jrtxtracy.repl.co/',
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
                "url": endpoint + "/blink?id=100033478361032,100022113516016&delay=500",
                "name": "Blink"
            },
            {
                "url": endpoint + "/fbcover/v1?name=Nguyễn Hải Đăng&color=no&address=VietNam&email=dangz123456789z@gmail.com&subname=J-JRT&sdt=0396049649&uid=100033478361032",
                "name": "Facebook Cover v1"
            },
            {
                "url": endpoint + "/fbcover/v2?name=Nguyễn Hải Đăng&color=no&subname=J-JRT&id=100",
                "name": "Facebook Cover v2"
            },
            {
                "url": endpoint + "/fbcover/v3?name=Nguyễn Hải Đăng&birthday=26/02/2003&love=Hà Nhung&location=VietNam&hometown=VietNam&follow=15000000&gender=Nam&uid=100033478361032",
                "name": "Facebook Cover v3"
            },
            {
                "url": endpoint + "/tiki?text=Nguyễn Hải Đăng",
                "name": "Đi cùng Tiki"
            },
            {
                "url": endpoint + "/cccd?text1=Nguyễn%20Hải%20Đăng&text2=26/02/2003&text3=Nam&text4=TPHCM&urlimg=https://i.ibb.co/F0Y0rFr/279917930-5866733526676879-1511731601410750983-n.jpg",
                "name": "Fake CCCD"
            },   
            {
                "url": endpoint + "/thuphap?id=1&sodong=1&dong_1=Nguyễn Hải Đăng",
                "name": "Chữ Thư Pháp"
            },
            {
                "url": endpoint + "/giangsinh?text=Hải Đăng",
                "name": "Giáng Sinh"
            },
            {
                "url": endpoint + "/shopmaihuong?text1=Nguyễn Hải Đăng&text2=0396049649",
                "name": "Shop Mike Hường"
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
            url: 'https://www.facebook.com/NHD.JRT.262/',
            name: 'Facebook'
        },
        {
            url: 'https://zalo.me/0396049649',
            name: 'Zalo'
        },
        {
            url: 'https://t.me/nhdjrt262',
            name: 'Telegram'
        },       
        {
            url: 'https://bio.link/nhdjrt262',
            name: 'My Profile'
        },
        {
            url: 'https://me.momo.vn/qr-page/P2P/donatetome',
            name: 'Donate Momo'
        },
        {
            url: 'https://playerduo.com/nhdjrt2602',
            name: 'Donate PlayerDuo Pay'
        },
        {
            url: 'https://playerduo.com/hdjrt03',
            name: 'Donate PlayerDuo'
        },
        {
            "url": endpoint + '/apikey?type=register&name=${name}&apikey=JRTxTracy_VIP',
            "name": "Get API_KEY Vip"
        },
        {
            url: 'https://imgur.com/NXX9Lnh',
            name: 'Donate Mbbank (ATM)'
        },
        {
            url: 'https://imgur.com/LBeXzsy',
            name: 'Donate ZaloPay'
        },
        {
            url: 'https://i.imgur.com/vTx2DQp.jpg',
            name: 'Donate Timo Bank (ATM)'
        }       
      ]
    }
];
