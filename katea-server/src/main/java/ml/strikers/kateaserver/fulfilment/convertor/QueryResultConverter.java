package ml.strikers.kateaserver.fulfilment.convertor;

import com.google.api.services.dialogflow.v2.model.GoogleCloudDialogflowV2beta1IntentMessage;
import com.google.cloud.dialogflow.v2.QueryResult;
import ml.strikers.kateaserver.fulfilment.entity.Currency;
import ml.strikers.kateaserver.fulfilment.entity.Fulfilment;
import ml.strikers.kateaserver.fulfilment.entity.Hotel;
import ml.strikers.kateaserver.fulfilment.entity.Price;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

public class QueryResultConverter {

    public static Fulfilment covertResultToFulfilment(QueryResult queryResult) {
        Fulfilment fulfilment = new Fulfilment();
        fulfilment.setFulfilmentSimpleResponse(queryResult.getFulfillmentText());
        return fulfilment;
    }

    private List<Hotel> convert(GoogleCloudDialogflowV2beta1IntentMessage message) {
        return message.getCarouselSelect()
                .getItems()
                .stream()
                .map(item -> {

                    Price price = new Price();
                    price.setValue(Double.valueOf(item.getInfo().get("price").toString()));
                    price.setCurrency(Currency.valueOf(item.getInfo().get("currency").toString()));

                    return Hotel.builder()
                            .imageUrl(item.getImage().getImageUri())
                            .name(item.getTitle())
                            .city(item.getInfo().get("city").toString())
                            .id(UUID.fromString(item.getInfo().get("hotelId").toString()))
                            .price(price)
                            .build();

                }).collect(Collectors.toList());
    }
}
