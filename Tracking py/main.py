import cv2
import torch
import numpy as np
from tracker import *

import json
 
 


model = torch.hub.load('ultralytics/yolov5', 'yolov5s', pretrained=True)

cap=cv2.VideoCapture('highway.mp4')

count=0
tracker = Tracker()




def POINTS(event, x, y, flags, param):
    if event == cv2.EVENT_MOUSEMOVE :  
        colorsBGR = [x, y]
        print(colorsBGR)
        

cv2.namedWindow('FRAME')
cv2.setMouseCallback('FRAME', POINTS)

area1=[(410,378),(52, 584),(534, 576),(546,376)]
area_1=set()

while True:
    ret,frame=cap.read()
    if not ret:
        break
    count += 1
    if count % 3 != 0:
        continue
    frame=cv2.resize(frame,(1020,600))
    results=model(frame)
    lis=[]
    for index,rows in results.pandas().xyxy[0].iterrows():
        x=int(rows[0])
        y=int(rows[1])
        x1=int(rows[2])
        y1=int(rows[3])
        b=str(rows['name'])
        lis.append([x,y,x1,y1])
    idx_bbox=tracker.update(lis)
    for bbox in idx_bbox:
        x2,y2,x3,y3,id=bbox
        cv2.rectangle(frame,(x2,y2),(x3,y3),(0,0,255),2)
        cv2.circle(frame,(x3,y3),3,(0,255,0),-1)
        result=cv2.pointPolygonTest(np.array(area1,np.int32),(x3,y3),False)
        if result > 0:
            area_1.add(id)
        
        
    cv2.polylines(frame,[np.array(area1,np.int32)],True,(0,255,225),2)
    co=len(area_1)
    print(co)
    

    
    filename='C:\\Users\\PRASAD\\Desktop\\hackathopia\\test\\route\\count.json'
    with open(filename,'r+') as file:
        file_data = json.load(file)
        file_data["countob"]["count"]=co
        file.seek(0)
        json.dump(file_data, file, indent = 4)
    
    cv2.imshow("FRAME",frame)
    if cv2.waitKey(1)&0xFF==ord('q'):
        break
cap.release()
cv2.destroyAllWindows()
