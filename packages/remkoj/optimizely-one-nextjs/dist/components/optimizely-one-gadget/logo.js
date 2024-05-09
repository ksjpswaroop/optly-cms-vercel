import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const defaultValues = {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 162 38",
    fill: 'none',
    "aria-hidden": true
};
export const OptimizelyLogo = props => {
    const title = props.title ?? 'Optimizely';
    const svgProps = {
        ...defaultValues,
        ...props
    };
    if (svgProps.title)
        delete svgProps.title;
    return _jsxs("svg", { ...svgProps, children: [_jsx("title", { children: title }), _jsx("path", { d: "m12.8359 20.4556v4.485c3.4221-.004 6.7029-1.3235 9.1227-3.6691s3.781-5.5257 3.7852-8.8428h-4.627c-.0027 2.128-.8761 4.1682-2.4284 5.6729-1.5524 1.5048-3.6571 2.3513-5.8525 2.354z", fill: "#3be081" }), _jsx("path", { d: "m12.8346 32.8099c-2.1796 0-4.26989-.8393-5.81108-2.3332-1.5412-1.4939-2.40703-3.5201-2.40703-5.6328 0-2.1128.86583-4.1389 2.40703-5.6329 1.54119-1.4939 3.63148-2.3332 5.81108-2.3332v-4.452c-1.6831-.0023-3.35011.3167-4.90597.9389-1.55586.6221-2.97007 1.5353-4.16187 2.6872s-2.13786 2.5202-2.784159 4.0265c-.6463 1.5064-.98018355 3.1214-.98258792 4.7528s.32671792 3.2473.96857492 4.7555c.641862 1.5081 1.583882 2.8789 2.772282 4.0342 1.1884 1.1552 2.59991 2.0723 4.15393 2.6987 1.55402.6265 3.2201.9502 4.9032.9525h.0366z", fill: "#0037ff" }), _jsx("path", { d: "m12.8359 32.81v4.452c3.3991 0 6.659-1.3088 9.0625-3.6386s3.7538-5.4897 3.7538-8.7845h-4.5981c-.0014 2.1127-.8675 4.1387-2.4083 5.6331-1.5407 1.4944-3.6302 2.3353-5.8099 2.338z", fill: "#0cf" }), _jsx("path", { d: "m12.8359 7.9711v4.452c3.3991 0 6.659-1.3088 9.0625-3.63861 2.4035-2.32979 3.7538-5.48967 3.7538-8.78449h-4.5981c-.0014 2.11278-.8675 4.13871-2.4083 5.63314-1.5407 1.49444-3.6302 2.33527-5.8099 2.33796z", fill: "#861dff" }), _jsx("path", { d: "m25.7266 7.9711v4.452c3.3991 0 6.6589-1.3088 9.0624-3.63861 2.4036-2.32979 3.7538-5.48967 3.7538-8.78449h-4.5955c-.0014 2.11321-.8679 4.13953-2.4092 5.63404-1.5413 1.4945-3.6314 2.33504-5.8115 2.33706z", fill: "#ff8110" }), _jsxs("g", { fill: "#000", children: [_jsx("path", { d: "m59.9453 18.6016h2.3671l.5571 1.2119c.2958-.2624.6234-.4888.9756-.6744.367-.1821.7483-.3355 1.1404-.4589.4864-.1487.994-.2215 1.504-.2155.7879-.0044 1.5675.1556 2.286.469.7207.3117 1.3692.7609 1.9067 1.3209.5589.5872 1.0021 1.2686 1.3078 2.0106.6472 1.632.6472 3.4386 0 5.0706-.305.7423-.7483 1.4238-1.3078 2.0106-.5376.5605-1.1861 1.0106-1.9067 1.3234-.7179.3127-1.4964.4735-2.2834.4716-.4763.0087-.951-.0546-1.4072-.1876-.3583-.1107-.708-.2463-1.0462-.4057-.3215-.1723-.6209-.3808-.8919-.6211v5.3977h-3.2015zm6.1257 9.581c.4255.0097.8485-.0669 1.2417-.225.3932-.158.748-.394 1.0417-.6928.6155-.6118.9224-1.4307.9206-2.4567.0222-.4482-.0477-.8962-.2058-1.318-.158-.4218-.401-.8088-.7148-1.1387-.2995-.2904-.6551-.5208-1.0464-.6779-.3914-.1572-.8108-.2381-1.2344-.2381s-.8431.0809-1.2344.2381c-.3913.1571-.7469.3875-1.0464.6779-.612.6135-.9181 1.4324-.9181 2.4567s.3061 1.8432.9181 2.4567c.2936.2988.6485.5348 1.0417.6928.3932.1581.8161.2347 1.2417.225z" }), _jsx("path", { d: "m80.1341 31.1524c-.5958.0069-1.1874-.0981-1.742-.3093-.5182-.2008-.9843-.5099-1.3653-.9051-.3877-.4079-.6897-.8849-.8893-1.4046-.2229-.5875-.332-1.2098-.3217-1.8356v-5.2634h-1.9486v-2.5632h.8344c1.0218 0 1.5327-.4952 1.5327-1.4857v-1.7468h2.7856v2.9714h2.7829v2.832h-2.7829v5.1289c-.0176.2134.0084.4281.0765.6318s.1769.3924.3202.5553.3183.2969.515.3942c.1967.0974.4113.1562.6314.1732.0871.0073.1746.0073.2616 0 .1202.006.2407.006.361 0 .0881-.0068.1756-.0204.2615-.0406.0768-.0194.1513-.0466.2223-.0811v2.7001c-.1434.0585-.2923.1035-.4446.1344-.3562.0876-.7234.1261-1.0907.1141z" }), _jsx("path", { d: "m86.12 17.116c-.4308.0106-.852-.1247-1.1911-.3824-.3391-.2578-.575-.622-.6672-1.0301-.0922-.408-.0349-.8345.1621-1.206.1969-.3716.5212-.665.9172-.83.3959-.1649.8388-.191 1.2524-.0738.4137.1172.7723.3703 1.0143.716s.3522.7622.3117 1.1781c-.0404.4159-.2291.8052-.5335 1.1009-.1626.1671-.3588.3001-.5766.3908-.2177.0907-.4523.1371-.6893.1365zm-1.6713 1.4857h3.2014v12.4232h-3.2014z" }), _jsx("path", { d: "m90.7109 18.6018h2.3671l.5571 1.2119c.2625-.2537.5518-.4797.8632-.6745.3022-.1808.6209-.3344.952-.4588.4-.1477.825-.2208 1.2529-.2155.5683-.014 1.1346.0719 1.6713.2535.4011.1415.7839.3278 1.1404.5552.3195.2179.5941.4923.8081.8088.306-.3118.652-.5837 1.031-.8088.381-.22.782-.4058 1.198-.5552.49-.1737 1.008-.2597 1.53-.2535 1.394 0 2.505.4335 3.342 1.2955s1.253 2.1424 1.253 3.8334v7.4235h-3.206v-7.1522c.035-.6479-.19-1.2839-.628-1.7747-.166-.1864-.368-.3392-.595-.4497-.226-.1106-.473-.1767-.727-.1946-.253-.0179-.507.0128-.748.0903s-.464.2002-.656.3613c-.07.0604-.136.1247-.198.1927-.438.4905-.663 1.1269-.625 1.7747v7.1522h-3.2045v-7.1522c.0371-.6478-.1871-1.2842-.6252-1.7747-.1659-.1864-.3682-.3393-.5952-.4499s-.4742-.1767-.7276-.1946c-.2533-.0179-.5079.0128-.749.0903s-.4641.2004-.6562.3615c-.0699.0597-.1355.1241-.1962.1927-.4378.4908-.6627 1.1268-.6277 1.7747v7.1522h-3.2015z" }), _jsx("path", { d: "m113.268 17.1154c-.432.011-.855-.1242-1.195-.3826-.341-.2583-.578-.6235-.67-1.0329-.093-.4093-.036-.8371.162-1.21.197-.3728.523-.6672.92-.8327s.841-.1916 1.256-.0739.775.3718 1.017.7187c.243.3469.353.7649.312 1.1821s-.23.8076-.536 1.1039c-.163.1671-.359.3001-.577.3908-.217.0907-.452.1372-.689.1366zm-1.671 1.4857h3.209v12.4231h-3.209z" }), _jsx("path", { d: "m117.16 28.4513 5.569-6.8809h-5.569v-2.9688h9.607v2.5632l-5.563 6.8961h5.846v2.9689h-9.89z" }), _jsx("path", { d: "m135.131 31.1517c-.849.0031-1.689-.1698-2.464-.507-.761-.3248-1.451-.7878-2.032-1.3641-.589-.5809-1.062-1.2626-1.394-2.0105-.34-.7817-.514-1.6213-.514-2.4694s.174-1.6877.514-2.4694c.332-.7479.805-1.4296 1.394-2.0105.582-.5755 1.271-1.0384 2.032-1.364.761-.322 1.581-.4916 2.411-.4986.83-.0069 1.653.1488 2.42.458.732.3014 1.395.7419 1.948 1.2956.572.5808 1.021 1.2636 1.324 2.0105.332.8211.497 1.6966.486 2.5784.001.1399-.008.2796-.026.4183-.021.1344-.039.2663-.057.393-.019.1268-.037.2789-.055.4031h-8.911c.138.5976.47 1.1366.946 1.539.557.4387 1.262.6602 1.978.6211.362.0074.724-.0379 1.072-.1343.259-.0784.507-.1874.738-.3246.21-.1339.398-.2981.557-.4867h3.343c-.186.5008-.444.9737-.767 1.4045-.35.4804-.773.9076-1.253 1.2677-.509.3775-1.072.6823-1.671.9051-.645.2344-1.33.3513-2.019.3448zm3.063-7.2865c-.133-.6934-.512-1.3199-1.072-1.7708-.559-.4509-1.264-.6978-1.991-.6978-.728 0-1.432.2469-1.992.6978-.559.4509-.938 1.0774-1.071 1.7708z" }), _jsx("path", { d: "m143.621 14.0122h3.202v17.0045h-3.202z" }), _jsx("path", { d: "m151.686 35.4717c-.147 0-.291-.0051-.432-.0152-.117-.006-.233-.0196-.348-.0406-.113-.0132-.225-.0405-.332-.0811v-2.5632c.581.0371 1.157-.1254 1.627-.4589.387-.3115.688-.7103.879-1.1612l.277-.6744-4.873-11.8755h3.343l3.202 8.0953 2.934-8.0953h3.343c-.91 2.2666-1.737 4.3176-2.48 6.1532-.316.791-.627 1.5669-.933 2.3199-.306.7529-.578 1.4451-.822 2.0663-.243.6211-.444 1.1383-.612 1.5516-.167.4132-.261.6566-.306.7302-.269.6435-.58 1.2694-.934 1.8736-.264.4627-.597.8855-.988 1.255-.326.3084-.714.5476-1.141.7022-.451.1521-.926.2259-1.404.2181z" }), _jsx("path", { d: "m48.0864 12.4258c-1.9099 0-3.777.549-5.365 1.5775s-2.8257 2.4904-3.5566 4.2008-.9222 3.5925-.5496 5.4083c.3726 1.8157 1.2924 3.4836 2.6429 4.7927s3.0711 2.2006 4.9443 2.5617c1.8733.3612 3.8149.1759 5.5794-.5326s3.2727-1.9082 4.3338-3.4476c1.0611-1.5393 1.6274-3.349 1.6274-5.2004.0004-1.2293-.2492-2.4466-.7343-3.5824-.4852-1.1359-1.1965-2.1679-2.0933-3.0371-.8967-.8693-1.9614-1.5588-3.1332-2.0291-1.1717-.4703-2.4276-.7122-3.6958-.7118zm0 15.4655c-1.2486.0145-2.4734-.3304-3.5196-.9911-1.0461-.6607-1.8665-1.6075-2.3572-2.7204-.4907-1.113-.6297-2.342-.3993-3.5315.2304-1.1896.8197-2.2861 1.6934-3.1508.8737-.8646 1.9925-1.4585 3.2146-1.7065 1.2221-.2479 2.4927-.1388 3.6508.3136 1.1581.4525 2.1516 1.2278 2.8548 2.228.7032 1.0001 1.0844 2.18 1.0954 3.3903v.0709c.0055 1.6099-.6473 3.1563-1.8155 4.3006s-2.7567 1.7931-4.4174 1.8045z" })] })] });
};
export default OptimizelyLogo;
