module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'db_wisata_cibeusi'),
			user: env('DATABASE_USERNAME', 'root'),
			password: env('DATABASE_PASSWORD', 'root'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
