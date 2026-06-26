const baseURL = 'dhairya.me'   // <-- replace with your domain or Vercel URL

// Enable / disable pages
const routes = {
    '/':        true,
    '/about':   true,
    '/work':    true,
    '/blog':    false,   // disabled — enable later when you start writing
    '/gallery': false,   // disabled
}

// Optional: password protect a route
// const protectedRoutes = {
//     '/work/draft-project': '1234',
// }

const effects = {
    mask: 'cursor',           // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.4,
    },
    dots: {
        display: true,
        opacity: 0.4,
        size: '24',
    },
    lines: {
        display: false,
    },
}

const style = {
    theme:       'dark',         // dark | light
    neutral:     'gray',         // sand | gray | slate
    brand:       'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',     // color | contrast
    solidStyle:  'flat',         // flat | plastic
    border:      'playful',      // rounded | playful | conservative
    surface:     'translucent',  // filled | translucent
    transition:  'all',          // all | micro | macro
    scaling:     '100',          // 90 | 95 | 100 | 105 | 110
}

const display = {
    location: true,   // shows Asia/Kolkata timezone
    time:     true,
}

const mailchimp = {
    action: '',
    effects: {
        mask:     'topLeft',
        gradient: { display: true,  opacity: 0.6 },
        dots:     { display: false, opacity: 0.4, size: '24' },
        lines:    { display: false },
    },
}

export { routes, effects, style, display, mailchimp, baseURL };
