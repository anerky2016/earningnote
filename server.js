const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

let server;

async function startServer() {
  try {
    await app.prepare();
    
    server = createServer(async (req, res) => {
      try {
        const parsedUrl = parse(req.url, true);
        await handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error occurred handling', req.url, err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    });

    server.listen(port, () => {
      console.log(`> Ready on port ${port}`);
    });

    // Handle graceful shutdown
    process.on('SIGTERM', () => gracefulShutdown());
    process.on('SIGINT', () => gracefulShutdown());
  } catch (err) {
    console.error('Error starting server:', err);
    process.exit(1);
  }
}

function gracefulShutdown() {
  console.log('Received kill signal, shutting down gracefully');
  server.close(() => {
    console.log('Closed out remaining connections');
    process.exit(0);
  });

  // Force close after 10s
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 10000);
}

startServer();