(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root of the server]__860be4f0._.js", {

"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
async function middleware(request) {
    const { pathname } = request.nextUrl;
    const sessionCookie = request.cookies.get('__session')?.value; // Example cookie name, adjust as per your auth strategy
    if (pathname.startsWith('/admin')) {
        if (!sessionCookie) {
        // No session cookie, redirect to login
        // In a real scenario with server-verified sessions, this check is more robust.
        // For client-side rendering heavy apps, the client handles redirect after checking auth state.
        // This middleware acts as an initial gatekeeper.
        // A more complete solution would involve verifying the sessionCookie with Firebase Admin SDK.
        // For now, we'll rely on client-side auth checks within the /admin pages and AuthProvider.
        // The AuthProvider will redirect if not admin. This middleware is a basic guard.
        // This is a placeholder: a true server-side check of the token is needed here.
        // For this example, we'll assume that if the /admin route is hit,
        // the client-side AuthProvider will handle the role check and redirect if necessary.
        // If you want strict server-side protection, you must verify the token.
        // The below is illustrative of what you might do if you had a server-side token verification.
        // For now, we'll let the client-side routing handle this based on AuthContext.
        // return NextResponse.redirect(new URL('/auth/login?redirect=/admin', request.url));
        }
    // If sessionCookie exists, ideally verify it here using Firebase Admin SDK.
    // If token is invalid or user is not admin, redirect.
    // Example (pseudo-code, requires firebase-admin):
    // try {
    //   const decodedToken = await authAdmin.verifyIdToken(sessionCookie);
    //   const userDoc = await dbAdmin.collection('users').doc(decodedToken.uid).get();
    //   if (!userDoc.exists || userDoc.data()?.role !== 'admin') {
    //     return NextResponse.redirect(new URL('/', request.url)); // Or an unauthorized page
    //   }
    // } catch (error) {
    //   return NextResponse.redirect(new URL('/auth/login?redirect=' + pathname, request.url));
    // }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/admin/:path*'
    ]
}; // Note: For full server-side protection, you'd need to:
 // 1. Set up Firebase Admin SDK (requires service account credentials).
 // 2. When a user logs in, create a session cookie (HttpOnly, Secure) via a backend function/API route.
 // 3. In middleware, verify this session cookie.
 // The current setup relies more on client-side checks via AuthProvider for role enforcement
 // once the user reaches the /admin path.
}}),
}]);

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__860be4f0._.js.map