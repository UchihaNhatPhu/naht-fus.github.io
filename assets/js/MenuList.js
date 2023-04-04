endpoint = `https://Docs-API.catteam123.repl.co`
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
        event: 'HOT',
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
        event: 'HOT',
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
        event: 'HOT',
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
        event: 'HOT',
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
        event: 'HOT',
        name: 'Short Url',
        icon: 'fa-solid fa-curling-stone',
        item: [{
            "url": endpoint + '/slink?url=https://www.youtube.com/watch?v=Jk38OqdAQxc',
            "name": "Short Url"
        }]
    },
    {
        event: 'HOT',
        name: 'Pinterest',
        icon: 'fa-brands fa-pinterest',
        item: [{
            "url": endpoint + '/pinterest?search=mirai',
            "name": "Search"
        }]
    },
    {
        event: 'HOT',
        name: 'Câu nói',
        icon: 'fa fa-list-alt',
        item: [{
            "url": endpoint + '/saying/hearing?apikey=điền api_key vào đây',
            "name": "Câu thính"
        },
        {
            "url": endpoint + '/saying/cadao?apikey=điền api_key vào đây',
            "name": "Câu ca dao"
        },
        {
            "url": endpoint + '/saying/bancobiet?apikey=điền api_key vào đây',
            "name": "Bạn có biết ?"
        },
        {
            "url": endpoint + '/saying/danhngon?apikey=điền api_key vào đây',
            "name": "Câu danh ngôn"
        }       
        ]
    },
    {
        event:'HOT',
        name: 'Random Videos',
        icon: 'fas fa-video',
        item: [{
            "event": 'HOT',
            "url": endpoint + '/video/gaixinh?apikey=điền api_key vào đây',
            "name": "Gái xinh"
        },
            {
                "event": 'HOT',
                "url": endpoint + '/video/anime?apikey=điền api_key vào đây',
                "name": "Anime"
            },
               {
                "event": 'NSFW',
                "url": endpoint + '/video/sex?apikey=điền api_key vào đây',
                "name": "Sex 18+"
            },
            {
                "url": endpoint + '/video/chill?apikey=điền api_key vào đây',
                "name": "Nhạc Chill"
            },
            {
                "url": endpoint + '/video/doraemon?apikey=điền api_key vào đây',
                "name": "Doraemon"
            },
            {
                "url": endpoint + '/video/genshin?apikey=điền api_key vào đây',
                "name": "Genshin"
            },
            {
                "url": endpoint + '/video/goku?apikey=điền api_key vào đây',
                "name": "Goku"
            },
            {
                "url": endpoint + '/video/nhacmoingay?apikey=điền api_key vào đây',
                "name": "Nhạc hay"
            },
            {
                "url": endpoint + '/video/nhacytb?apikey=điền api_key vào đây',
                "name": "Nhạc YTB"
            },
            {
                "url": endpoint + '/video/soundcl?apikey=điền api_key vào đây',
                "name": "Nhạc Soundcloud"
            }   
        ]
    },
    {
        event: 'HOT',
        name: 'NSFW',
        icon: 'fas fa-user-secret',
        item: [{
            "url": endpoint + '/nsfw/ausand?apikey=điền api_key vào đây',
            "name": "Ausand"
        },
        {
            "url": endpoint + '/nsfw/butter?apikey=điền api_key vào đây',
            "name": "Butter"
        },
        {
            "url": endpoint + '/nsfw/xnxx?apikey=điền api_key vào đây',
            "name": "Xnxx"
        },       
        {
            "url": endpoint + '/nsfw/hentaiz?apikey=điền api_key vào đây',
            "name": "Hentaiz"
        },       
        {
            "url": endpoint + '/nsfw/du?apikey=điền api_key vào đây',
            "name": "Ngực"
        },     
        {
            "url": endpoint + '/nsfw/gaisexy?apikey=điền api_key vào đây',
            "name": "Gái Sexy"
        },   
        {
            "url": endpoint + '/nsfw/hana?apikey=điền api_key vào đây',
            "name": "Hana"
        },     
        {
            "url": endpoint + '/nsfw/ig?apikey=điền api_key vào đây',
            "name": "Instagram"
        },       
        {
            "url": endpoint + '/nsfw/mong?apikey=điền api_key vào đây',
            "name": "Mông"
        },     
        {
            "url": endpoint + '/nsfw/naughty?apikey=điền api_key vào đây',
            "name": "Naughty"
        },  
        {
            "url": endpoint + '/nsfw/nsfw?apikey=điền api_key vào đây',
            "name": "NSFW"
        }, 
        {
            "url": endpoint + '/nsfw/nude?apikey=điền api_key vào đây',
            "name": "Nude"
        },       
        {
            "url": endpoint + '/nsfw/penissucking?apikey=điền api_key vào đây',
            "name": "Penissucking"
        },       
        {
            "url": endpoint + '/nsfw/sex?apikey=điền api_key vào đây',
            "name": "Sex 18+"
        },       
        {
            "url": endpoint + '/nsfw/tw?apikey=điền api_key vào đây',
            "name": "Twitter"
        },       
        {
            "url": endpoint + '/nsfw/vsbg?apikey=điền api_key vào đây',
            "name": "VSBG"
        },       
        ]
    },
    {
        event: 'HOT',
        name: 'Random Images',
        icon: 'fa-solid fa-images',
        item: [{
                "url": endpoint + '/images/anime?apikey=điền api_key vào đây',
                "name": "Anime"
            },
            {
                "url": endpoint + '/images/animememe?apikey=điền api_key vào đây',
                "name": "Anime Meme"
            },
            {
                "url": endpoint + '/images/animev2?apikey=điền api_key vào đây',
                "name": "Anime v2"
            },
            {
                "url": endpoint + '/images/avatar?apikey=điền api_key vào đây',
                "name": "Avatar"
            },
            {
                "url": endpoint + '/images/capdoi?apikey=điền api_key vào đây',
                "name": "Cặp đôi"
            },
            {
                "url": endpoint + '/images/cosplay?apikey=điền api_key vào đây',
                "name": "Cosplay"
            },
            {
                "url": endpoint + '/images/gainhat?apikey=điền api_key vào đây',
                "name": "Gái nhật"
            },
            {
                "url": endpoint + '/images/gaixinhvn?apikey=điền api_key vào đây',
                "name": "Gái xinh VN"
            },
            {
                "url": endpoint + '/images/ghost?apikey=điền api_key vào đây',
                "name": "Ghost"
            },
            {
                "url": endpoint + '/images/girl?apikey=điền api_key vào đây',
                "name": "Gái"
            },   
            {
                "url": endpoint + '/images/hoathinh?apikey=điền api_key vào đây',
                "name": "Cartoon Network"
            },
            {
                "url": endpoint + '/images/jack?apikey=điền api_key vào đây',
                "name": "Jack (J97)"
            },
            {
                "url": endpoint + '/images/jimmy?apikey=điền api_key vào đây',
                "name": "Jimmy"
            },
            {
                "url": endpoint + '/images/khanhhuyen?apikey=điền api_key vào đây',
                "name": "Khánh Huyền"
            },
            {
                "url": endpoint + '/images/lebong?apikey=điền api_key vào đây',
                "name": "Lê Bống"
            },
            {
                "url": endpoint + '/images/lienquan?apikey=điền api_key vào đây',
                "name": "Liên Quân"
            },
            {
                "url": endpoint + '/images/lnd?apikey=điền api_key vào đây',
                "name": "Linh Ngọc Đàm"
            },   
            {
                "url": endpoint + '/images/nendienthoai?apikey=điền api_key vào đây',
                "name": "Nền Điện Thoại"
            },
            {
                "url": endpoint + '/images/ngoctrinh?apikey=điền api_key vào đây',
                "name": "Ngọc Trinh"
            },
            {
                "url": endpoint + '/images/tokyo?apikey=điền api_key vào đây',
                "name": "Tokyo Revengers"
            },
            {
                "url": endpoint + '/images/trai?apikey=điền api_key vào đây',
                "name": "Trai"
            },
            {
                "url": endpoint + '/images/wallpaper?apikey=điền api_key vào đây',
                "name": "Wallpaper"
            },
            {
                "url": endpoint + '/images/aqua?apikey=điền api_key vào đây',
                "name": "Aqua"
            },   
            {
                "url": endpoint + '/images/chitanda?apikey=điền api_key vào đây',
                "name": "Chitanda"
            },
            {
                "url": endpoint + '/images/kana?apikey=điền api_key vào đây',
                "name": "Kana"
            },
            {
                "url": endpoint + '/images/kurumi?apikey=điền api_key vào đây',
                "name": "Kurumi"
            },
            {
                "url": endpoint + '/images/loli?apikey=điền api_key vào đây',
                "name": "Loli"
            },  
            {
                "url": endpoint + '/images/lolicon?apikey=điền api_key vào đây',
                "name": "Lolicon"
            },
            {
                "url": endpoint + '/images/lucy?apikey=điền api_key vào đây',
                "name": "Lucy"
            },  
            {
                "url": endpoint + '/images/mirai?apikey=điền api_key vào đây',
                "name": "Mirai"
            }, 
            {
                "url": endpoint + '/images/rem?apikey=điền api_key vào đây',
                "name": "Rem"
            },   
            {
                "url": endpoint + '/images/sagiri?apikey=điền api_key vào đây',
                "name": "Sagiri"
            },  
            {
                "url": endpoint + '/images/siesta?apikey=điền api_key vào đây',
                "name": "Siesta"
            },   
            {
                "url": endpoint + '/images/umaru?apikey=điền api_key vào đây',
                "name": "Umaru"
            }
        ]
    },
    {
        event: 'HOT',
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
        event: 'HOT',
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
        event: 'HOT',
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
