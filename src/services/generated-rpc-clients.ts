// Taiwan Monitor — stub RPC clients (no-op constructors for static hosting)
function stub(name: string): any {
  return class {
    constructor(..._args: any[]) {}
    [key: string]: any;
  };
}

export const PredictionServiceClient = stub("Prediction");
export const MarketServiceClient = stub("Market");
export const EconomicServiceClient = stub("Economic");
export const NewsServiceClient = stub("News");
export const MaritimeServiceClient = stub("Maritime");
export const MilitaryServiceClient = stub("Military");
export const ResilienceServiceClient = stub("Resilience");
export const SupplyChainServiceClient = stub("SupplyChain");
export const IntelligenceServiceClient = stub("Intelligence");
export const InfrastructureServiceClient = stub("Infrastructure");
export const ClimateServiceClient = stub("Climate");
export const CyberServiceClient = stub("Cyber");
export const ForecastServiceClient = stub("Forecast");
export const AviationServiceClient = stub("Aviation");
export const ConflictServiceClient = stub("Conflict");
export const SeismologyServiceClient = stub("Seismology");
export const WildfireServiceClient = stub("Wildfire");
export const HealthServiceClient = stub("Health");
export const TradeServiceClient = stub("Trade");
export const UnrestServiceClient = stub("Unrest");
export const SanctionsServiceClient = stub("Sanctions");
export const ScenarioServiceClient = stub("Scenario");
export const ResearchServiceClient = stub("Research");
export const NaturalServiceClient = stub("Natural");
export const GivingServiceClient = stub("Giving");
export const DisplacementServiceClient = stub("Displacement");
export const ConsumerPricesServiceClient = stub("ConsumerPrices");
export const LeadsServiceClient = stub("Leads");
export const ShippingV2ServiceClient = stub("ShippingV2");
export const WebcamServiceClient = stub("Webcam");
export const RadiationServiceClient = stub("Radiation");
export const ThermalServiceClient = stub("Thermal");
export const PositiveEventsServiceClient = stub("PositiveEvents");
