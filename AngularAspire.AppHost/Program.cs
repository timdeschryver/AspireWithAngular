var builder = DistributedApplication.CreateBuilder(args);

var weatherforecastApi = builder.AddProject<Projects.AngularAspire_WeatherForecastAPI>("weatherforecastapi");

builder.AddNpmApp("AngularFrontEnd", "../AngularAspire.AngularFrontEnd")
    .WithReference(weatherforecastApi)
    .WaitFor(weatherforecastApi)
    .WithHttpEndpoint(env: "PORT")
    .WithExternalHttpEndpoints();


builder.Build().Run();
