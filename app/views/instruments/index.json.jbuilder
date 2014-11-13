json.array!(@instruments) do |instrument|
  json.extract! instrument, :id, :name, :owner
  json.url instrument_url(instrument, format: :json)
end
