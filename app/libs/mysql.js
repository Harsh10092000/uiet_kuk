import mysql from 'mysql2/promise'

// Optimized connection pool configuration
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  // Connection pool settings
  waitForConnections: true,
  connectionLimit: 10,        // Max simultaneous connections
  queueLimit: 0,              // Unlimited queue (0 = no limit)

  // Performance settings
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,  // 10 seconds

  // Timeout settings
  connectTimeout: 10000,      // 10 sec connection timeout

  // Prepared statements cache (faster repeated queries)
  maxPreparedStatements: 200,
})

export default pool