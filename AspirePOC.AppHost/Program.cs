var builder = DistributedApplication.CreateBuilder(args);

var weatherforecastApi = builder.AddProject<Projects.WeatherForecastAPI>("weatherforecastapi");

builder
    .AddNpmApp("Angular", "../AngularAspire")
    .WithReference(weatherforecastApi)
    .WithServiceBinding(scheme: "http", hostPort: 4200);

builder.Build().Run();
