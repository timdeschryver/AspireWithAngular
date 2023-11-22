var builder = DistributedApplication.CreateBuilder(args);

var weatherforecastApi = builder.AddProject<Projects.AngularAspire_WeatherForecastAPI>("weatherforecastapi");

builder
    .AddNpmApp("AngularFrontEnd", "../AngularAspire.AngularFrontEnd")
    .WithReference(weatherforecastApi)
    .WithServiceBinding(scheme: "http", hostPort: 4200);

builder.Build().Run();
