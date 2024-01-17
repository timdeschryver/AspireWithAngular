var builder = DistributedApplication.CreateBuilder(args);

var weatherforecastApi = builder.AddProject<Projects.AngularAspire_WeatherForecastAPI>("weatherforecastapi");

builder
    .AddNpmApp("AngularFrontEnd", "../AngularAspire.AngularFrontEnd")
    .WithReference(weatherforecastApi)
    .WithServiceBinding(hostPort: 4200, scheme: "http", env: "PORT");

builder.Build().Run();
