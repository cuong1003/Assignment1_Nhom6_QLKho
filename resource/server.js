const dotenv = require("dotenv");
dotenv.config({ override: true }); // override để tránh bị system env ghi đè trên Windows

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 9999;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running at http://localhost:${PORT}`);
        console.log(`📦 API docs:`);
        console.log(`   POST   /api/auth/register`);
        console.log(`   POST   /api/auth/login`);
        console.log(`   GET    /api/categories`);
        console.log(`   GET    /api/products?search=&category=&lowStock=true`);
        console.log(`   POST   /api/transactions/stock-in`);
        console.log(`   POST   /api/transactions/stock-out`);
        console.log(`   GET    /api/transactions/report/summary`);
    });
});
