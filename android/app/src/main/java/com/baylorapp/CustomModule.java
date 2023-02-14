package com.baylorapp;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import java.util.Map;
import java.util.HashMap;
import android.util.Log;
import android.widget.Toast;
import android.provider.Settings.Secure;

public class CustomModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext  reactContext;
    CustomModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;

    }

    @Override
    public String getName() {
        return "CustomModuleAndroid";
    }
    @ReactMethod
    public void showText(){
        Toast.makeText(reactContext, "Hola From Android :)", Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
    public void getDeviceId(Promise promise){
        try{
            String android_id = Secure.getString(reactContext.getContentResolver(),
                    Secure.ANDROID_ID);
            promise.resolve(android_id);
        }
        catch (Exception e){
            promise.reject("Error", e);
        }
    }


    @ReactMethod
    public void createCalendarEvent(String name, String location) {
        Log.d("CalendarModule", "Create event called with name: " + name
                + " and location: " + location);
    }

}