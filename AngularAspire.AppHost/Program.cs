var builder = DistributedApplication.CreateBuilder(args);

var weatherforecastApi = builder
    .AddProject<Projects.AngularAspire_WeatherForecastAPI>("weatherforecastapi");

builder.AddNpmApp("AngularFrontEnd", "../AngularAspire.AngularFrontEnd")
    .WithHttpEndpoint(env: "PORT", port: 4200)
    .WithReference(weatherforecastApi)
    .WaitFor(weatherforecastApi)
    .WithExternalHttpEndpoints();

builder.Build().Run();
