const MUSIC_LIST = [
    {
        name: 'pokemon',
        url: 'https://web-1303060686.cos.ap-nanjing.myqcloud.com/audio/pokemon-1.mp3',
        des: '',
        temporary: ''
    }
]


const NAVIGATOR_MUSIC = [
    {
        name: 'bg1',
        url: 'https://web-1303060686.cos.ap-nanjing.myqcloud.com/audio/music.mp3?q-sign-algorithm=sha1&q-ak=AKIDn9qGNmABdY4TTrUUo_WhmwJRke8hSw81J3kevExH0G601zoQ_-2LvWIcY96iD_Fn&q-sign-time=1616056364;1616059964&q-key-time=1616056364;1616059964&q-header-list=&q-url-param-list=&q-signature=ad9b4d1fc40e32a1c912a0b44abdbb0cd5b915b5&x-cos-security-token=Gpx7Mur3eSzCiMwCLCzL4C7si6rKy6ia48ff271b1f320eaf61cc4a757ff19f2c3Mxd_hTWF-kNPg0N7WwKXpgQovwtG79mWgkRK7HHya38qwEjFFRvDzOUCLH_oZid72rj4VkwpCXDAZlT--Rv17dHkP33BXQnxdKhmlLPlYOu_FoIN2dT28EslzYIyzd-DcuWt3XUu13nVRKPQHYG_jFmfLuY2qpU-jTDeNRx1Fw',
        des: '',
        image: 'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background01.png?q-sign-algorithm=sha1&q-ak=AKIDiLQrHJ-gy_yk_WfR_2FDctQxLN_lAZ_434-Epl3xGfeiZIbDr34UVxyKOQ29Etys&q-sign-time=1616056921;1616060521&q-key-time=1616056921;1616060521&q-header-list=&q-url-param-list=&q-signature=56acaa580b13df8e935560ae261cffa2c5019b0c&x-cos-security-token=Gpx7Mur3eSzCiMwCLCzL4C7si6rKy6iae605e420df089e90325b6328f6d5bbdc3Mxd_hTWF-kNPg0N7WwKXk4EsoBRm8ZJ_wA1WDUkw0foKr7AmEuwv483AcM86XiCIjXZYvHcK8niLq1eM0QLf44uEKT_sr-E4zTSHwrmEGHKobEjhxGhW9m7VMYD9kuI12d190dBBS0l78j4nOD13cmk-arXUliACrnmAIv0ZeU',
    },
    {
        name: 'bg2',
        url: 'https://web-1303060686.cos.ap-nanjing.myqcloud.com/audio/pokemon-2.mp3?q-sign-algorithm=sha1&q-ak=AKIDcO1YPHVYvU4MgMYq5wMU_ukLclvcbnRXx0USqGHruVoObMBRNmBY2lRlFXHpMBuS&q-sign-time=1616056971;1616060571&q-key-time=1616056971;1616060571&q-header-list=&q-url-param-list=&q-signature=ef6cf2038b5f1b22cc78210f0d991a66b44f835f&x-cos-security-token=Gpx7Mur3eSzCiMwCLCzL4C7si6rKy6iae060c83cd6a28478dde563e4ab87aece3Mxd_hTWF-kNPg0N7WwKXtJtnagmJt5ZP_5q1Z2K1D_E48ZnxdHDP4RlMqLeRKP26O-vSKGeV5L3Lvdnj3lFQ_uK8KnKzrvI-7dL20ODAy0GDoNigTk36SiOXu9t52R6l-QLD_Cj5oKWVF_41J5Ug4aa7J94xNU1aKlGTLviO1U',
        des: '',
        image: 'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background01.png?q-sign-algorithm=sha1&q-ak=AKIDiLQrHJ-gy_yk_WfR_2FDctQxLN_lAZ_434-Epl3xGfeiZIbDr34UVxyKOQ29Etys&q-sign-time=1616056921;1616060521&q-key-time=1616056921;1616060521&q-header-list=&q-url-param-list=&q-signature=56acaa580b13df8e935560ae261cffa2c5019b0c&x-cos-security-token=Gpx7Mur3eSzCiMwCLCzL4C7si6rKy6iae605e420df089e90325b6328f6d5bbdc3Mxd_hTWF-kNPg0N7WwKXk4EsoBRm8ZJ_wA1WDUkw0foKr7AmEuwv483AcM86XiCIjXZYvHcK8niLq1eM0QLf44uEKT_sr-E4zTSHwrmEGHKobEjhxGhW9m7VMYD9kuI12d190dBBS0l78j4nOD13cmk-arXUliACrnmAIv0ZeU'
    },
    {
        name: 'bg3',
        url: '',
        des: '',
        image: 'https://web-1303060686.cos.ap-nanjing.myqcloud.com/image/background03.png?q-sign-algorithm=sha1&q-ak=AKIDgAxsINamyWM9GRr8weuIlrgSNQQYGEARZC9sD4uxDtThhREBrWFuZEMaGWxN3A9f&q-sign-time=1616051991;1616055591&q-key-time=1616051991;1616055591&q-header-list=&q-url-param-list=&q-signature=7773d0591ef4b42f6784f103bdaac77d58565d86&x-cos-security-token=oadOIjhrTHNUxoaB5aRKi1iOJ4BG8y6ac6d0f9cd385e191189f28bffa8a2c1baeODL5kvihSQ5PTOYjrGUtmwncxOv-amvXbpPtNwBZcrpTGG_7nK7b_hM1f0okr1PoUzvL0BAUQmlbbm_F9HoN8m74P6EivhBySAestB5mPNgj05ZT_wC8PKAKqlnis_0pDBVKs8vs5FijdFf7e2DnYT7jDg1Qs5glElUSRuIqK8'
    }
]

export {
    MUSIC_LIST,
    NAVIGATOR_MUSIC
}