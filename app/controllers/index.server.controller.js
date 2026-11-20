exports.render =
    function (req, res) {
        if (req.session.lastVisit) {
            console.log(req.session.lastVisit);
        }
        req.session.lastVisit = new Date();
        const definitions = [
            {
                name: 'MongoDB',
                description: 'MongoDB is a document-oriented NoSQL database used to store application data in flexible, JSON-like documents.'
            },
            {
                name: 'Express',
                description: 'Express is a Node.js web application framework used to build server-side routes, APIs, and middleware.'
            },
            {
                name: 'Angular',
                description: 'Angular is a TypeScript-based front-end framework used to build dynamic, component-driven web applications and user interfaces.'
            },
            {
                name: 'Node.js',
                description: 'Node.js is a JavaScript runtime that executes JavaScript outside the browser and powers scalable server-side applications.'
            }
        ];

        res.render('index', {
            name: 'Cameron Dean',
            title: 'The MEAN Stack',
            definitions: definitions
        });
};